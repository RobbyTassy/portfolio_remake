// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function () {
  // alert('document ready');

  $("#nav").hover(
    function() {
      // console.log("adding padding");
      $("#nav, #body").addClass("toggled");
    },
    function() {
      // console.log("removing padding");
      $("#nav, #body").removeClass("toggled");
    }
  );

  $('#about').click(function(){
    $('body').animate({
        scrollTop: $('#about-me').offset().top
    }, 500);
    return false;
});

  $('#home').click(function(){
    $('body').animate({
        scrollTop: $('#top_div').offset().top
    }, 500);
    return false;
  });

  $('#portfolio_link').click(function(){
    $('body').animate({
        scrollTop: $('#portfolio').offset().top
    }, 500);
    return false;
  });

  $('#contact').click(function(){
    $('body').animate({
        scrollTop: $('#contact-me').offset().top
    }, 500);
    return false;
  });


});
