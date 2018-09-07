// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery
//= require-jquery_ujs
//select an image by it's id
//
$(document).ready(function(){
  $( "#draggable" ).draggable();

  $( "#dialog" ).dialog({ autoOpen: false });
$( "#opener" ).click(function() {
  $( "#dialog" ).dialog( "open" );
});
  $( "#accordion" ).accordion();
  $( "#datepicker" ).datepicker({
  beforeShowDay: $.datepicker.noWeekends
});
$('img').dblclick(function(){
  $(this).addClass('move-that-ass')
  console.log("Liked!");
  $('.like-heart').fadeIn(250);
  $('.like-heart').delay(800).fadeOut(400);
})
$('.like-heart').hide();
});
