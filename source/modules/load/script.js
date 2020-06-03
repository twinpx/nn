/*$( '.b-load__item' ).addClass( 'i-show' );

$( '.b-load' ).delegate( '.b-load__button', 'click', function(e){
  e.preventDefault();
  
  var $loadButton = $( this );
  var $load = $loadButton.closest( '.b-load' );
  var $loadButtonBlock = $load.find( '.b-load__button-block' );
  
  $.ajax({
    url: $loadButton.data( 'ajax-url' ),
    method: $loadButton.data( 'ajax-method' ),
    dataType: 'html',
    success: function( html ) {
      
      var $item = $( html ).find( '.b-load__item' );
      
      $loadButtonBlock.remove();
      $load.append( $item );
      
      setTimeout( function() {
        $item.addClass( 'i-show' );
      }, 100);
    },
    error: function() {}
  });
});*/