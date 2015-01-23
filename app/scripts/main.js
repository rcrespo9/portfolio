'use strict';

var app = app || {};


// scrollTo anchor scroll event
app.anchorScroll = (function() {
	var s;

	return {

		settings: {
			navLink: $('.anchor-link')
		},

		init: function() {
			s = this.settings;
			this.scrollToSection();
		},

		scrollToSection: function() {
			s.navLink.on('click', function(e) {
				var linkId = this.hash;
				e.preventDefault();

				$(linkId).velocity('scroll', { duration: 750, offset: -80});
			});
		}

	};
}());

// projects carousel
app.projectsCarousel = (function() {
	var s;

	return {
		settings: {
			carousel: $('.projects-carousel')
		},

		init: function() {
			s = this.settings;
			this.createCarousel();
		},

		createCarousel: function() {
			s.carousel.slick({
				draggable: false,
				dots: true
			});
		}
	};
}());

$(function() {
	app.anchorScroll.init();
	app.projectsCarousel.init();	
});