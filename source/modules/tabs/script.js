$('.b-tabs').each(function () {
  var $tabs = $(this);
  var $items = $tabs.find('.b-tabs__item');
  var $tabsTabs = $tabs.find('.b-tabs__tab');

  $items.click(function () {
    var $item = $(this);
    var $tab = $tabs.find('.b-tabs__tab[ data-tab=' + $item.data('tab') + ']');

    $items.removeClass('i-active');
    $item.addClass('i-active');
    $tabsTabs.removeClass('i-active');
    $tab.addClass('i-active');

    //set URL
    var queryString = window.location.search;
    var queryObject = parseQuery(queryString);
    queryObject.type = $item.data('tab');
    history.replaceState({}, '', getQuery(queryObject));
  });
});

function getQuery(queryObject) {
  var result = [];
  for (var k in queryObject) {
    if (k) {
      result.push(k + '=' + queryObject[k]);
    }
  }
  return '?' + result.join('&');
}

function parseQuery(queryString) {
  var query = {};
  var pairs = (
    queryString[0] === '?' ? queryString.substr(1) : queryString
  ).split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
  }
  return query;
}
