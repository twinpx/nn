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

$('.sidenav').sidenav({
  edge: 'right',
});

$('.b-sidenav-close').click(function (e) {
  e.preventDefault();
  $('.sidenav').sidenav('close');
});

//placeholder
setTimeout(function () {
  $(
    '.b-header, h1, .b-breadcrumbs, #gallery, #planText, #buildings, .b-heading, #detail, #plan, #prices, #visual, #actions, #actionsDetail, #news, #newsDetail, #bigGallery, #docs, #hypothec, #flat-choice'
  ).addClass('i-ph-animated');
}, 500);

//scroll effects
/*$( window ).scroll( function() {
  
  //choose a flat
  if ( document.getElementById( 'flat-choice' ) && ($( window ).scrollTop() + $( window ).height() - 200) > $( '#flat-choice' ).offset().top ) {
    $( '#flat-choice' ).addClass( 'i-scroll-animated' );
  }
  
  //advantages
  if ( document.getElementById( 'advantages' ) && ($( window ).scrollTop() + $( window ).height() - 200) > $( '#advantages' ).offset().top ) {
    $( '#advantages' ).addClass( 'i-scroll-animated' );
  }
  
  //description
  if ( document.getElementById( 'description' ) && ($( window ).scrollTop() + $( window ).height() - 200) > $( '#description' ).offset().top ) {
    $( '#description' ).addClass( 'i-scroll-animated' );
  }
  
  //plan
  if ( document.getElementById( 'plan' ) && ($( window ).scrollTop() + $( window ).height() - 200) > $( '#plan' ).offset().top ) {
    $( '#plan' ).addClass( 'i-scroll-animated' );
  }
}).scroll();*/
