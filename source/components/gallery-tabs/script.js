window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.b-tabs-gallery').forEach(function (tabsGallery) {
    var items = tabsGallery.querySelectorAll('.b-tabs-gallery__nav a');
    var tabs = tabsGallery.querySelectorAll('.b-tabs-gallery__tab');

    //tabs
    items.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        var tab = Array.from(tabs).find(function (current) {
          return (
            current.getAttribute('data-tab') === item.getAttribute('data-tab')
          );
        });

        //remove active
        tabsGallery.querySelectorAll('.i-active').forEach(function (active) {
          active.classList.remove('i-active');
        });

        //add active
        item.classList.add('i-active');
        tab.classList.add('i-active');
      });
    });

    //swiper gallery
    tabs.forEach(function (tab) {
      new Swiper(tab.querySelector('.swiper'), {
        slidesPerView: 1,
        spaceBetween: 16,

        breakpoints: {
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
          },
        },

        navigation: {
          nextEl: tab.querySelector('.b-tabs-gallery__arrows-next'),
          prevEl: tab.querySelector('.b-tabs-gallery__arrows-prev'),
        },

        on: {
          afterInit: function (swiper) {
            swiper.el
              .querySelectorAll('.swiper-wrapper a')
              .forEach(function (slideLink) {
                slideLink.addEventListener('click', function (e) {
                  e.preventDefault();
                  swiper.el.classList.add('b-tabs-gallery--fullscreen');
                });
              });
          },
        },
      });
    });
  });
});
