
(function(jQuery){
	var ResponsiveTopScreen = function() {};
	ResponsiveTopScreen.prototype = {
		run: function(target){
			console.log(target);
		}
	};
	
	/**
	 * Main stream
	 */
	jQuery.fn.responsiveTopScreen = function(options){
		var options = jQuery.extend(jQuery.fn.responsiveTopScreen.defaults, options);
		
		// set using objects.
		var target = jQuery(this);
		
		// Event start
		topScreen = new ResponsiveTopScreen();
		topScreen.run(target);
		
		return target;
	};
	
	/**
	 * default settings.
	 */
	jQuery.fn.responsiveTopScreen.defaults = {
		
	};
})(jQuery);