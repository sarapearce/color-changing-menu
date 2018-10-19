// Assumption: The size of each section is full screen
jQuery(document).on('scroll', function(el) {
  var windowHeight = jQuery(window).height();
  // section 1
  if (jQuery(document).scrollTop() < windowHeight) {
    jQuery(".hamburger-menu").css({
      'color': '#420f2f'
    });
  }
  // section 2
  if (windowHeight < jQuery(document).scrollTop() && jQuery(document).scrollTop() < 2 * windowHeight) {
    jQuery(".hamburger-menu").css({
      'color': '#1b9a28'
    });
  }
  // section 3
  if (2 * windowHeight < jQuery(document).scrollTop() && jQuery(document).scrollTop() < 3 * windowHeight) {
    jQuery(".hamburger-menu").css({
      'color': '#e7ff00'
    });
  }
	// section 4: colors are already inversions in the background, go with white
  if (3 * windowHeight < jQuery(document).scrollTop() && jQuery(document).scrollTop() < 4 * windowHeight) {
    jQuery(".hamburger-menu").css({
      'color': '#ffffff'
    });
  }
	// section 5
  if (4 * windowHeight < jQuery(document).scrollTop() && jQuery(document).scrollTop() < 5 * windowHeight) {
    jQuery(".hamburger-menu").css({
      'color': '#620003'
    });
  }
	// section 6
  if (5 * windowHeight < jQuery(document).scrollTop() && jQuery(document).scrollTop() < 6 * windowHeight) {
    jQuery(".hamburger-menu").css({
      'color': '#ff70b3'
    });
  }
	// section 7
	if (6 * windowHeight < jQuery(document).scrollTop() && jQuery(document).scrollTop() < 7 * windowHeight) {
		jQuery(".hamburger-menu").css({
			'color': '#377d2a'
		});
	}
	// section 8
	if (7 * windowHeight < jQuery(document).scrollTop() && jQuery(document).scrollTop() < 8 * windowHeight) {
		jQuery(".hamburger-menu").css({
			'color': '#71b6ff'
		});
	}
	// section 9: section contains both black and white, go with the inversion on the button color
	if (8 * windowHeight < jQuery(document).scrollTop() && jQuery(document).scrollTop() < 9 * windowHeight) {
		jQuery(".hamburger-menu").css({
			'color': '#8c2800'
		});
	}
})
