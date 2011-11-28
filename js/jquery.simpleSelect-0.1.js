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
				
				base.$el.wrap('<span class="'+base.options.containerClass+'"><span></span></span>').before('<span class="'+base.options.labelClass+'"></span>').css('opacity', 0);
				
				base.$container = base.$el.closest('.'+base.options.containerClass),
				base.$label = base.$container.find('.'+base.options.labelClass);
				
				//bind keyboard/mouse actions
				base.$el.bind('change keyup', function(){
					base.$el.trigger('updateLabel.simpleSelect');
				}).bind('focus', function(){
					base.$container.addClass(base.options.focusClass);
				}).bind('blur', function(){
					base.$container.removeClass(base.options.focusClass);
				}).bind('updateLabel.simpleSelect', function(){
					base.$label.text(base.$el.find('option:selected').text());
				});
				
				//do initial label update
				base.$el.trigger('updateLabel.simpleSelect');
			
			}
			
			//initialise
			base.init();
		
		}
	}
	
	//default options
    $.simpleSelect.defaultOptions = {
		containerClass: 'simpleSelect',
		labelClass: 'simpleLabel',
		focusClass: 'focus'			
    };

    $.fn.simpleSelect = function(options){
        return this.each(function(){
            (new $.simpleSelect(this, options));
        });
    };

})(jQuery);