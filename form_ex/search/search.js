jQuery(function($){
	// Input Clear
	var iText = $('.iClear>.iLabel').next('.iText');
	iText
		.focus(function(){
			$(this).prev('.iLabel').css('visibility','hidden');
		})
		.blur(function(){
			if($(this).val() == ''){
				$(this).prev('.iLabel').css('visibility','visible');
			} else {
				$(this).prev('.iLabel').css('visibility','hidden');
			}
		})
		.change(function(){
			if($(this).val() == ''){
				$(this).prev('.iLabel').css('visibility','visible');
			} else {
				$(this).prev('.iLabel').css('visibility','hidden');
			}
		})
		.blur();
});