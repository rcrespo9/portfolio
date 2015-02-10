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

// navigation overlay
app.navigation = (function() {
	var s;

	return {
		settings: {
			navButton: $('.navbar-toggle, .nav-link'),
			navOverlay: $('.overlay'),
			theBody: $('body')
		},

		init: function() {
			s = this.settings;
			this.navEvents();
		},

		navEvents: function() {
			s.navButton.on('click', function(e) {
				var speed = 200;

				e.preventDefault();

				if(s.navOverlay.is(':visible')) {
					s.navOverlay.velocity('fadeOut', { duration: speed });
					s.theBody.removeClass('no-scroll');		
				} else {
					s.navOverlay.velocity('fadeIn', { duration: speed });
					s.theBody.addClass('no-scroll');
				}

			});
		}

	};
}());

// greeting
app.greeting = (function() {
	return {
		init: function() {
			this.insertGreeting();
		},

		insertGreeting: function() {
			var $introGreeting = $('#intro-greeting');
			var today = new Date();
			var hrs = today.getHours();

			if(hrs <= 12) {
				$introGreeting.text('Good Morning.');
			} else if(hrs <= 18) {
				$introGreeting.text('Good Afternoon.');
			} else {
				$introGreeting.text('Good Evening.');
			}
		}
	};
}());

// initalize everything
$(function() {
	app.anchorScroll.init();
	app.projectsCarousel.init();
	app.navigation.init();
	app.greeting.init();	
});