(function ($) {
  'use strict';

  $(function () {
    var data = {
      ratio: 2.6,
      width: '100%',
      arrows: true,
      click: true,
      swipe: true,
      loop: true,
    };

    if (window.matchMedia('(max-width: 767px)').matches) {
      delete data.ratio;
      data.height = '90%';
    }

    $('.b-top-gallery .b-fotorama__gallery').fotorama(data);

    $('.countdown').countdown({
      render: function (date) {
        this.el.innerHTML =
          '<div class="countdown-block"><div class="countdown-item">' +
          date.days +
          '<div class="countdown-text">' +
          words(date.days, ['дней', 'день', 'дня']) +
          '</div></div><span>:</span><div class="countdown-item">' +
          date.hours +
          '<div class="countdown-text">' +
          words(date.hours, ['часов', 'час', 'часа']) +
          '</div></div><span>:</span><div class="countdown-item">' +
          date.min +
          '<div class="countdown-text">' +
          words(date.min, ['минут', 'минута', 'минуты']) +
          '</div></div><span>:</span><div class="countdown-item">' +
          date.sec +
          '<div class="countdown-text">' +
          words(date.sec, ['секунд', 'секунда', 'секунды']) +
          '</div></div></div>';
      },
    });

    $('.b-top-gallery .b-fotorama__gallery').on(
      'fotorama:showend',
      function (e, fotorama) {
        fotorama.activeFrame.$stageFrame.find('h1').addClass('i-ph-animated');
      }
    );

    document.querySelectorAll('.b-top-gallery').forEach(function (gallery) {
      gallery.addEventListener('click', function (e) {
        if (
          e.target.classList.contains('b-fotorama__counter-block') ||
          e.target.closest('.b-fotorama__counter-block')
        ) {
          e.stopPropagation();
        }
      });
    });

    setTimeout(function () {
      $('.b-fotorama__container, .b-fotorama__sticky-content').addClass(
        'i-load'
      );
    }, 100);

    function words(num, array) {
      if (/(10|11|12|13|14|15|16|17|18|19)$/.test(num)) {
        return array[0];
      } else if (/.*1$/.test(num)) {
        return array[1];
      } else if (/[2-4]$/.test(num)) {
        return array[2];
      } else {
        return array[0];
      }
    }

    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });
})(jQuery);
