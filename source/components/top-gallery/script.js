(function ($) {
  'use strict';

  $(function () {
    $('.b-top-gallery .b-fotorama__gallery').fotorama();
    $('.b-top-gallery .b-fotorama__gallery').on(
      'fotorama:showend',
      function (e, fotorama) {
        fotorama.activeFrame.$stageFrame.find('h1').addClass('i-ph-animated');
      }
    );

    setTimeout(function () {
      $('.b-fotorama__container, .b-fotorama__sticky-content').addClass(
        'i-load'
      );
    }, 100);

    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });
})(jQuery);
