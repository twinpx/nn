$(function () {
  var currentDate = new Date();
  $('div#clock').countdown(
    15 * 24 * 60 * 60 * 1000 + currentDate.valueOf(),
    function (event) {
      $this = $(this);
      switch (event.type) {
        case 'seconds':
        case 'minutes':
        case 'hours':
        case 'days':
        case 'weeks':
        case 'daysLeft':
          $this.find('span#' + event.type).html(event.value);
          break;
        case 'finished':
          $this.fadeTo('slow', 0.5);
          break;
      }
    }
  );
});
