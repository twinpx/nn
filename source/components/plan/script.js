( function($) {

  'use strict';
  
  $( function() {
    
    ymaps.ready(function () {
        var planYmap = new ymaps.Map( 'planYmap', {
                center: window.planYmapCenter,
                zoom: window.planYmapZoom,
                controls: [ 'zoomControl', 'typeSelector' ]
            }, {
              yandexMapDisablePoiInteractivity: true
            }),
            placemarkLayouts = {},
            balloonLayouts = {},
            buildingObj = {},
            
            balloonProps = {
              build: function () {
                this.constructor.superclass.build.call(this);
                this._$element = $('.b-balloon', this.getParentElement());
                this.applyElementOffset();

                this._$element.find('.b-balloon__close').on('click', $.proxy(this.onCloseClick, this));
              },
              clear: function () {
                  this._$element.find('.b-balloon__close').off('click');
                  this.constructor.superclass.clear.call(this);
              },
              applyElementOffset: function () {
                this._$element.css({
                  left: -(this._$element[0].offsetWidth / 2),
                  top: -(this._$element[0].offsetHeight)
                });
              },
              onCloseClick: function (e) {
                e.preventDefault();
                this.events.fire('userclose');
              },
               /**
               * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
               * @function
               * @private
               * @name _isElement
               * @param {jQuery} [element] Элемент.
               * @returns {Boolean} Флаг наличия.
               */
              _isElement: function (element) {
                return element && element[0] && element.find('.arrow')[0];
              }
            },
            
            clusterers = {},
            placemarks = {};
            
        //infrastructure
        planYmap.events.add( 'boundschange', function(e) {
          if ( e.get( 'newZoom' ) !== e.get( 'oldZoom' )) {
            showHideInfrastructure();
          }
        });
            
        planYmap.behaviors.disable( 'scrollZoom' ); 
        planYmap.events.add( 'click', function (e) {
          planYmap.balloon.close();
        });
        
        if ( window.planPlacemarks ) {
          
          for ( var buildingType in window.planPlacemarks ) {
            
            if ( buildingType === 'infrastructure' ) {
              
              //create placemark layout
              placemarkLayouts[ buildingType ] = ymaps.templateLayoutFactory.createClass( '<div class="b-placemark-icon i-' + buildingType + '" style="background-image: url( $[properties.src] );"></div>' );
              
              //create balloon layout
              balloonLayouts[ buildingType ] = ymaps.templateLayoutFactory.createClass(
                '<div class="b-balloon i-' + buildingType + '"><div class="b-balloon__close"></div><div class="b-balloon__icon" style="background-image: url(\'$[properties.src]\');"></div><div class="b-balloon__heading">$[properties.heading]</div></div>',
              
                balloonProps
              );
              
              placemarks[ buildingType ] = [];
              
              for ( var w = 0; w < window.planPlacemarks[ buildingType ].length; w++ ) {
                
                buildingObj = window.planPlacemarks[ buildingType ][w];
                
                placemarks[ buildingType ][w] = new ymaps.Placemark(
                  buildingObj.coords,
                  {
                    name: buildingObj.num,
                    heading: buildingObj.name,
                    src: buildingObj.src
                  },
                  {
                    iconLayout: placemarkLayouts[ buildingType ],
                    iconShape: {type: 'Rectangle', coordinates: [[-16,-16], [16,16]]},
                    balloonShadow: false,
                    balloonLayout: balloonLayouts[ buildingType ]
                  }
                );
                
              }
              
            } else {
              //create placemark layout
              placemarkLayouts[ buildingType ] = ymaps.templateLayoutFactory.createClass( '<div class="b-placemark-icon i-' + buildingType + '">$[properties.name]</div>' );
              
              //create balloon layout
              balloonLayouts[ buildingType ] = ymaps.templateLayoutFactory.createClass(
                '<div class="b-balloon i-' + buildingType + '"><div class="b-balloon__close"></div><div class="b-balloon__name">$[properties.name]</div><div class="b-balloon__heading">$[properties.heading]</div><div class="b-balloon__props">$[properties.props]</div><div class="b-balloon__button"><a href="$[properties.href]">Все предложения</a></div></div>',
              
                balloonProps
              );
              
              //create placemarks array
              placemarks[ buildingType ] = [];
              
              for ( var i = 0; i < window.planPlacemarks[ buildingType ].length; i++ ) {
                
                buildingObj = window.planPlacemarks[ buildingType ][i];
                
                placemarks[ buildingType ][i] = new ymaps.Placemark(
                  buildingObj.coords,
                  {
                    name: buildingObj.num,
                    heading: buildingObj.heading,
                    props: buildingObj.props,
                    href: buildingObj.href
                  },
                  {
                    iconLayout: placemarkLayouts[ buildingType ],
                    iconShape: {type: 'Rectangle', coordinates: [[-16,-16], [16,16]]},
                    balloonShadow: false,
                    balloonLayout: balloonLayouts[ buildingType ]
                  }
                );
                
              }
            
            }
              
            //create clusterer
            clusterers[ buildingType ] = new ymaps.Clusterer({
              preset: 'twirl#invertedVioletClusterIcons',
              groupByCoordinates: false
            });
              
            clusterers[ buildingType ].add( placemarks[ buildingType ]);
              
            //planYmap.geoObjects.add( clusterers[ buildingType ] );
            for ( var q = 0; q < placemarks[ buildingType ].length; q++ ) {
              planYmap.geoObjects.add( placemarks[ buildingType ][q] );
            }
            
          }
        }
        
        showHideInfrastructure();
        
        function showHideInfrastructure() {
          var state = planYmap.action.getCurrentState();
            
          if ( state.zoom < 17 ) {
            $( '#planYmap' ).addClass( 'i-show-infrastructure' );
          } else {
            $( '#planYmap' ).removeClass( 'i-show-infrastructure' );
          }
        }
        
    });
    
  });

}( jQuery ));