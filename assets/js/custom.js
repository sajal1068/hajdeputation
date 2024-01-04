

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
          
          
     

          $('.arrows').click(function () {
                $(".contact_info_sec").toggleClass("moveclass", 1000);  
          });

      //   $( ".arrows" ).click(function() {     
      //     if($('.address:visible').length)
      //         $('.address').hide("slide", { direction: "right" }, 1000);

      //     else
      //         $('.address').show("slide", { direction: "right" }, 1000);        
      // })
      
          
// $(document).ready(function(){
//   $(".arrows").click(function(){
//     $(".address").animate({
//       width: "toggle"
//     });
//   });
// });

// vertical tabs section

$('.tabs h4').click(function(event) {
  event.preventDefault();
  $(this).addClass('active');
  $(this).siblings().removeClass('active');

  var ph = $(this).parent().height();
  var ch = $(this).next().height();

  if (ch > ph) {
    $(this).parent().css({
      'min-height': ch + 'px'
    });
  } else {
    $(this).parent().css({
      'height': 'auto'
    });
  }
});

function tabParentHeight() {
  var ph = $('.tabs').height();
  var ch = $('.tabs .contentBox').height();
  if (ch > ph) {
    $('.tabs').css({
      'height': ch + 'px'
    });
  } else {
    $(this).parent().css({
      'height': 'auto'
    });
  }
}

$(window).resize(function() {
  tabParentHeight();
});

$(document).resize(function() {
  tabParentHeight();
});
tabParentHeight();

          