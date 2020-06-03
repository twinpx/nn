if ( window.ymaps ) {
  ymaps.ready(function () {
  
    var saleofficeYmap = new ymaps.Map( 'saleofficeYmap', {
      center: [55.544306, 37.154464],
      zoom: 14,
      controls: [ 'zoomControl', 'typeSelector' ]
    }, {}),
    
    saleOfficePlacemark = new ymaps.Placemark( saleofficeYmap.getCenter(), {}, {
        iconLayout: 'default#image',
        iconImageHref: window.saleofficePlacemarkSrc,
        iconImageSize: [64, 64],
        iconImageOffset: [-32, -32]
    });
    
    saleofficeYmap.geoObjects.add( saleOfficePlacemark );
    
  });
}