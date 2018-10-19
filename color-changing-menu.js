// Assumption: The size of each section is full screen
jQuery(document).on('scroll', function(el) {
  var windowHeight = parseInt(jQuery(window).height(), 10);
  // section 1
  if (jQuery(document).scrollTop() < windowHeight) {
    jQuery(".hamburger-menu").css({
      'color': '#ffffff'
    });
    console.log('Color White');
  }
  // section 2
  if (windowHeight < jQuery(document).scrollTop() && jQuery(document).scrollTop() < 2 * windowHeight) {
    jQuery(".hamburger-menu").css({
      'color': '#000000'
    });
    console.log('Color Black');
  }
  // section 3
  if (2 * windowHeight < jQuery(document).scrollTop() && jQuery(document).scrollTop() < 3 * windowHeight) {
    jQuery(".hamburger-menu").css({
      'color': '#ffffff'
    });
    console.log('Color White again');

  }
})
