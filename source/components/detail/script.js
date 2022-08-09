window.addEventListener('load', function () {
  var hrefArray = window.location.href.split('/').reverse();
  var id = hrefArray[0] || hrefArray[1];

  var detailObject = window.sessionStorage.getItem('detailObject')
    ? JSON.parse(window.sessionStorage.getItem('detailObject'))
    : {};

  detailObject[id] = 'visited';
  window.sessionStorage.setItem('detailObject', JSON.stringify(detailObject));
});
