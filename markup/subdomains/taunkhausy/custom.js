$( '.b-header__menu a' ).click( function(e) {
  e.preventDefault();
  selector = $( this ).attr( 'href' ).replace( '/', '' );
  
  if ( !!selector ) {
    $.scrollTo( $( selector ).offset().top - 150, 300 );
  } else {
    $.scrollTo( 0, 300 );
  }
  
});