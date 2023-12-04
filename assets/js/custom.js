

// acrodian 
        // When any accordion title is clicked...
		$(".accordionTitle").click(function() {
            const $accordion_wrapper = $(this).parent();
            const $accordion_content = $(this).parent().find(".accordionContent");
            const $accordion_open = "accordion--open";
  
            // If this accordion is already open
            if ($accordion_wrapper.hasClass($accordion_open)) {
              $accordion_content.slideUp();                     // Close the content.
              $accordion_wrapper.removeClass($accordion_open);  // Remove the accordionm--open class.
            }
            // If this accordion is not already open
            else {
              $accordion_content.slideDown();                 // Show this accordion's content.
              $accordion_wrapper.addClass($accordion_open);   // Add the accordion--open class.
            }
          });


          // Back to top 

          jQuery(window).scroll(function(){
            if(jQuery(window).scrollTop()<50){
                jQuery('#rocketmeluncur').slideUp(500);
            }else{
                jQuery('#rocketmeluncur').slideDown(500);
            }
            var ftrocketmeluncur = jQuery("#ft")[0] ? jQuery("#ft")[0] : jQuery(document.body)[0];
            var scrolltoprocketmeluncur = $('rocketmeluncur');
          var viewPortHeightrocketmeluncur = parseInt(document.documentElement.clientHeight);
          var scrollHeightrocketmeluncur = parseInt(document.body.getBoundingClientRect().top);
          var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
          var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
          if (basewrocketmeluncur < 1000) {
          var leftrocketmeluncur = parseInt(fetchOffset(ftrocketmeluncur)['left']);
          leftrocketmeluncur = leftrocketmeluncur < swrocketmeluncur ? leftrocketmeluncur * 2 - swrocketmeluncur : leftrocketmeluncur;
          scrolltoprocketmeluncur.style.left = ( basewrocketmeluncur + leftrocketmeluncur ) + 'px';
          } else {
          scrolltoprocketmeluncur.style.left = 'auto';
          scrolltoprocketmeluncur.style.right = '10px';
          }
          })
          
          jQuery('#rocketmeluncur').click(function(){
            jQuery("html, body").animate({ scrollTop: '0px',display:'none'},{
                    duration: 600,  
                    easing: 'linear'
                });
            
            var self = this;
            this.className += ' '+"launchrocket";
            setTimeout(function(){
              self.className = 'showrocket';
            },800)
          });          