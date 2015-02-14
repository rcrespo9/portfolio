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
			navTrigger: $('.nav-trigger'),
			navLink: $('.nav-link'),
			overlays: $('.overlay, .dark-overlay'),
			theBody: $('body'),
			activeClass: 'active-overlay',
			inactiveClass: 'inactive-overlay',
			noScroll: 'no-scroll',
			animationEnd:'webkitAnimationEnd oanimationend msAnimationEnd animationend'
		},

		init: function() {
			s = this.settings;
			this.navEvents();
		},

		navEvents: function() {
			s.navTrigger.on('click', function(e) {

				e.preventDefault();

				if(s.overlays.hasClass(s.activeClass)) {
					s.theBody.removeClass(s.noScroll);
					s.overlays.removeClass(s.activeClass);

					s.overlays.addClass(s.inactiveClass);
					
					s.overlays.on(s.animationEnd, function() {
						s.overlays.removeClass(s.inactiveClass);
					});
				} else {
					s.theBody.addClass(s.noScroll);
					s.overlays.addClass(s.activeClass);
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

app.svgFallBack = (function() {
	return {
		init: function() {
			this.replaceImage();
		},

		replaceImage: function() {
			svgeezy.init(false, 'png');
		}
	};
}());

// initalize everything
$(function() {
	app.anchorScroll.init();
	app.projectsCarousel.init();
	app.navigation.init();
	app.greeting.init();
	app.svgFallBack.init();	
});