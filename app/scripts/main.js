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

// projects template
app.generateProjects = (function() {
	var s;

	return {
		settings: {

		},

		init: function() {
			s = this.settings;
			this.createProjectsTemplate();
		},

		createProjectsTemplate: function() {

		}
	};
}());

$(function() {
	app.anchorScroll.init();	
});