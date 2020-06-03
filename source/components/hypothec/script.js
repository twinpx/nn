( function($) {

  'use strict';
  
  $( function() {
    
    $( '.b-calculator-form .b-form-field' ).each( function() {
      var $field = $( this );
      var $slider = $field.find( 'div' );
      var $input = $field.find( 'input[type=text]' );
      var $hidden = $( '#' + $input.attr( 'id' ) + 'Hidden' );
      
      $field.find( 'input[type=hidden]' );
      
      var slider = $slider.slider({
        min: $slider.data( 'min' ),
        max: $slider.data( 'max' ),
        range: "min",
        value: $input.val(),
        slide: function( event, ui ) {
        
          if ( $slider.attr( 'id' ) === 'priceSlider' ) {
            if ( ui.value < $( '#firstSlider' ).slider( 'value' )) {
              $( '#firstSlider' ).slider({ value: ui.value });
              $( '#firstInput' ).val( makeNumSpaces( ui.value ));
            }
          } else if ( $slider.attr( 'id' ) === 'firstSlider' ) {
            if ( ui.value > $( '#priceSlider' ).slider( 'value' )) {
              $( '#priceSlider' ).slider({ value: ui.value });
              $( '#priceInput' ).val( makeNumSpaces( ui.value ));
            }
          }
        
          if ( $( '#priceSlider' ).slider( 'value' ) < $( '#firstSlider' ).slider( 'value' )) {
            $( '#priceSlider' ).slider({ value: $( '#firstSlider' ).slider( 'value' )});
            $( '#priceInput' ).val( makeNumSpaces( $( '#priceSlider' ).slider( 'value' )));
          }
          
          $input.val( makeNumSpaces(ui.value));
          $hidden.val( ui.value );
          calculateResult();
        }
      });
      
      $input.val( makeNumSpaces( removeNumSpaces($input.val())));
      
      $input.on( "change", function() {
        var val = 1*removeNumSpaces( $( this ).val());
        
        if ( val > $slider.data( 'max' )) {
          val = $slider.data( 'max' );
        }
        
        if ( $input.attr( 'id' ) === 'priceInput' ) {
          if ( val < removeNumSpaces( $( '#firstInput' ).val())) {
            $( '#firstSlider' ).slider({ value: val });
            $( '#firstInput' ).val( makeNumSpaces( val ));
          }
        } else if ( $input.attr( 'id' ) === 'firstInput' ) {
          if ( val > removeNumSpaces( $( '#priceInput' ).val())) {
            $( '#priceSlider' ).slider({ value: val });
            $( '#priceInput' ).val( makeNumSpaces( val ));
          }
        }
        
        slider.slider( "value", val );
        $hidden.val( val );
        $( this ).val( makeNumSpaces(val));
        calculateResult();
      });
    });
    
    calculateResult();
    
    function calculateResult() {
      var price = removeNumSpaces( $( '#priceInput' ).val());
      var percent = removeNumSpaces( $( '#percentInput' ).val());
      var period = removeNumSpaces( $( '#periodInput' ).val());
      var first = removeNumSpaces( $( '#firstInput' ).val());
      
      var months = period * 12 - 1;
      var credit = price - first;
      var month_perc = percent / 1200;
      var month_payment = Math.round((credit * month_perc) / (1 - Math.pow(1 + month_perc, - months)));
      
      $( '#minIncome' ).text( makeNumSpaces( month_payment*2 ));
      $( '#monthPay' ).text( makeNumSpaces( month_payment ));
      
      $( '#minIncomeInput' ).val( month_payment*2 );
      $( '#monthPayInput' ).val( month_payment );
    }
    
    function removeNumSpaces( str ) {
      return 1*String( str ).split( ' ' ).join('');
    }
    
    function makeNumSpaces(num) {
      num = String(num);
      var length = num.length;
      var spaces = Math.floor(length/3);
      var first = length%3;
      var counter = 0;
      var array = [];
      
      for(var i = 0; i <= spaces; i++) {
        array.push(num.substring(counter, i*3 + first));
        counter = i*3 + first;
      }
      
      num = array.join(" ");
      
      return num;
    }
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));