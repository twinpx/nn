if (window.matchMedia('(min-width: 1024px)').matches) {
  $('.modal').modal();
}

$('.b-back-link').click(function (e) {
  e.preventDefault();
  window.history.back();
});

if ($('.b-filter').length) {
  $('.b-filter .col.xl9').niceScroll();
}

//placeholder
setTimeout(function () {
  $(
    '.b-header, h1, .b-breadcrumbs, #gallery, #planText, #buildings, .b-heading, #detail, #plan, #prices, #visual, #actions, #actionsDetail, #news, #newsDetail, #bigGallery, #docs, #hypothec, #flat-choice'
  ).addClass('i-ph-animated');
}, 500);

//sidenav
$('.sidenav').sidenav({
  edge: 'right',
});

$('.b-sidenav-close').click(function (e) {
  e.preventDefault();
  $('.sidenav').sidenav('close');
});

document
  .querySelectorAll('#sideNav .b-sidenav-sub__title')
  .forEach(function (sub) {
    sub.addEventListener('click', function (e) {
      e.preventDefault();
      e.target.parentNode
        .querySelector('.b-sidenav-sub__menu')
        .classList.toggle('i-open');
    });
  });
