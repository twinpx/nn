( function($) {

  'use strict';
  
  $( function() {
    
    $( '.b-form input[type=tel]' ).mask( '+0 (000) 000 00 00' );

    $( '.b-form form' ).submit( function(e) {
      
      var tel;
      
      if ( window.ComagicWidget ) {
        tel = $( this ).find( 'input[type=tel]' ).val();
        ComagicWidget.sitePhoneCall({phone:tel}, function(resp){if ( window.console ) {console.log(resp);}});
      }
    });
    
   $( 'form#form_ipoteka' ).submit( function() {
     try {
       ym( 62963446, 'reachGoal', 'FORM-IPOTEKA-SUBMIT' );
       ga( 'send', 'event', 'form-ipoteka', 'submit' );
     } catch (e) {}
     
     return true;
   });
    
   $( 'form#form_request' ).submit( function() {
     try {
       ym( 62963446, 'reachGoal', 'FORM-REQUEST-SUBMIT' );
       ga( 'send', 'event', 'form-request', 'submit' );
     } catch (e) {}
     
     return true;
   });
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));