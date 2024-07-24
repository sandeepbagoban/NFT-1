
/* SMOOTH SCROLL */
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
// MENU
(function($){
    $('.nav-toggle').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('active');
    })
    $('.nav-overlay').click(function(e){
        e.preventDefault();
        $('.nav-toggle').toggleClass('active');
        $('.nav-menu').toggleClass('active');
        $('.nav-overlay').toggleClass('active');
        $('.menu').toggleClass('active');
        $('body').toggleClass('active');
    })
})(jQuery);


$('.menu.social ul.nav-menu li a').click(function(){
            $(".menu.social").toggleClass('active');
});
$('.menu.social ul.nav-menu li a').click(function(){
            $("body").toggleClass('active');
});
$('.menu.social ul.nav-menu li a').click(function(){
            $(".nav-toggle").toggleClass('active');
});
$('.menu.social ul.nav-menu li a').click(function(){
            $(".menu.social ul.nav-menu").toggleClass('active');
});

/* AUTO SCROLL HEIGHT */


/* BACK TO TOP */

$(function(){

  //Scroll event
  $(window).scroll(function(){
    var scrolled = $(window).scrollTop();
    if (scrolled > 200) $('#scroll').fadeIn('slow');
    if (scrolled < 200) $('#scroll').fadeOut('slow');
  });
  
  //Click event
  $('#scroll').click(function () {
    $("html, body").animate({ scrollTop: "0" },  500);
  });

});


/* YOUTUBE VIDEO */
/*$("video").prop('muted', true);

$("#playvideo").click(function () {
    if ($("video").prop('muted')) {
        $("video").prop('muted', false);
        $(this).addClass('unmute-video');

    } else {
        $("video").prop('muted', true);
        $(this).removeClass('unmute-video');
    }
    console.log($("video").prop('muted'))
});


var tag = document.createElement('script');
          tag.src = "https://www.youtube.com/iframe_api";
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

          var player;

          function onYouTubeIframeAPIReady() {
            player = new YT.Player('video1', {
              events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
              }
            });
          }

          function onPlayerReady() {
            console.log("hey Im ready");
            //do whatever you want here. Like, player.playVideo();
          }

          function onPlayerStateChange() {
            console.log("my state changed");
          }

          document.getElementById("playvideo").addEventListener('click', function(event) {
            console.log(player);

            if (player.isMuted()) {
              player.unMute();
            } else {
              player.mute();
            }
          });*/
          
$(document).ready(function(){
   if ($('#load').is(':visible')){
         $('body').addClass("overflow");
    }
 });



