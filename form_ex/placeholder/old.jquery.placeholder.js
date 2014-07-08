// Plugin based on Andrew January's work at
// http://www.morethannothing.co.uk/wp-content/uploads/2010/01/placeholder.js
// and other solutions.

/*START:plugin */
(function($){  
  
  $.fn.placeholder = function(){   
    return this.each(function() {  
      if ($(this).attr('type') == 'password') {
        $(this).addClass('placeholder_password_field');
      }

      function valueIsPlaceholder(input){
        return ($(input).val() == $(input).attr("placeholder"));
      }
      
      function isAPasswordField(input){
        return ($(input).hasClass("placeholder_password_field"));
      }

      // Replace the value with the placeholder text. 
      // optional reload parameter solves FF and IE caching values on fields.
      function showPlaceholder(input, reload){
        if( $(input).val() == "" || ( reload && valueIsPlaceholder(input) ) ){ //<label id="code.js.placeholder.reload" />
          
          if (isAPasswordField(input)){  //<label id="code.placeholder.password" />
            try { input.setAttribute('type', 'input');
              $(input).focus();
            } catch (e) { }
          }
          
          $(input).val($(input).attr("placeholder"));
          
        }
      }
      
      function hidePlaceholder(input){
        if(valueIsPlaceholder(input)){
 
          if(isAPasswordField(input)){
            try { input.setAttribute('type', 'password');
              $(input).focus();
            } catch (e) { }
          }
          
          $(input).val("");
        };
      }

      showPlaceholder(this, true); //<label id="code.js.placeholder.reload.call" />
      $(this).focus(function(){
         hidePlaceholder(this);
      });

      $(this).blur(function(){
        showPlaceholder(this, false);
      });
    });  
  };

  
/*START:plugin */
})(jQuery); 
/*END:plugin */

