/*!
 * jQuery Simple Select 1.0
 *
 * https://github.com/dkeeghan/jQuery-SimpleSelect
 *
 * Copyright 2014 Damian Keeghan
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function($){
	$.simpleSelect = function(el, options){
		var base = this;

		base.$el = $(el);
		base.el = el;

		//if the simpleSelect code hasn't already run
		if(typeof(base.$el.data('simpleSelect')) === 'undefined'){

			base.$el.data('simpleSelect', base);

			base.init = function(){
				// extend options
				base.options = $.extend({}, $.simpleSelect.defaultOptions, options);

				base.$el.wrap('<span class="'+base.options.containerClass+'"></span>').before('<span class="'+base.options.labelClass+'"></span>').css('opacity', 0);

				base.options.containerClass = base.options.containerClass.replace(' ', '.');

				base.$container = base.$el.closest('.'+base.options.containerClass);
				base.$label = base.$container.find('.'+base.options.labelClass);

				if(base.options.slidingDoors){
					base.$container.children().wrapAll('<span></span>');
				}

				base.$container.addClass(base.$el.attr('class'));

				//bind keyboard/mouse actions
				base.$el.on('change keyup', function(){
					base.$el.trigger('updateLabel.simpleSelect');
				}).on('focus', function(){
					base.$container.addClass(base.options.focusClass);
				}).on('blur', function(){
					base.$container.removeClass(base.options.focusClass);
				}).on('updateLabel.simpleSelect', function(){
					base.$label.text(base.$el.find('option:selected').text());
				});

				//do initial label update
				base.$el.trigger('updateLabel.simpleSelect');

			};

			//initialise
			base.init();

		}
	};

	//default options
	$.simpleSelect.defaultOptions = {
		containerClass: 'simple-select',
		labelClass: 'simple-label',
		focusClass: 'focus',
		slidingDoors: true
	};

	$.fn.simpleSelect = function(options){
		return this.each(function(){
			(new $.simpleSelect(this, options));
		});
	};

})(jQuery);