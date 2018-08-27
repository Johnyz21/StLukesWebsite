$(document).ready(function() {

  /* If the user scrolls, the scrollToMainContent animation will stop */
  $('html, body').bind("scroll mousedown DOMMouseScroll mousewheel keyup", stopAnimationOnScroll );

  setTimeout(scrollToMainContent, 1000);

  var pathname = window.location.pathname;
  $('nav  li > a[href="' + pathname + '"]').parent().addClass('active');


});

var scrollToMainContent = function scroll_to() {
  $('html, body').animate({
    scrollTop: $("#main-content").offset().top
  }, 2000);
};

var stopAnimationOnScroll = function(e) {
  if (e.which > 0 || e.type === "mousedown" || e.type === "mousewheel") {
    $('html, body').stop(true, false);
  }
};
