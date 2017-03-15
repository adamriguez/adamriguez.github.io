/*win.scroll(function(){
  scrollPosition = win.scrollTop();
  scrollRatio = 1 - scrollPosition / 300;
  $(".top").css("opacity", scrollRatio);
*/


$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 3000);
 
});