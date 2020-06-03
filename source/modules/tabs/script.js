$( '.b-tabs' ).each( function() {
  var $tabs = $( this );
  var $menu = $tabs.find( '.b-tabs__menu' );
  var $items = $tabs.find( '.b-tabs__item' );
  var $tabsTabs = $tabs.find( '.b-tabs__tab' );
  
  $items.click( function(e) {
    var $item = $( this );
    var $tab = $tabs.find( '.b-tabs__tab[ data-tab=' + $item.data( 'tab' ) + ']' );
    
    $items.removeClass( 'i-active' );
    $item.addClass( 'i-active' );
    $tabsTabs.removeClass( 'i-active' );
    $tab.addClass( 'i-active' );
  });
});