/*START:plugin */
(function($){  
  
  $.fn.placeholder = function(){   
    return this.each(function() {  
      if($(this).attr("type") == "password"){
        var new_field = $("<input type='text'>");
        $(this).hide();
        new_field.attr("rel", $(this).attr("id"));
        new_field.attr("value", $(this).attr("placeholder"));
        new_field.focus(function(){
          $(this).hide();
          $('input#' + $(this).attr("rel")).show().focus();
        });

        $(this).blur(function(){
          if($(this).val() == ""){
            $(this).hide();
            $('input[rel=' + $(this).attr("id") + ']').show();
          };
        });

        $(this).parent().append(new_field);
        
      }else{
        $(this).focus(function(){
          if($(this).val() == $(this).attr("placeholder")){
            $(this).val("");
          };
        });

        $(this).blur(function(){
          if($(this).val() == ""){
            $(this).val($(this).attr("placeholder"));
          };
        });

        $(this).blur();
    
    });  
  };
  
})(jQuery); 
/*END:plugin */

