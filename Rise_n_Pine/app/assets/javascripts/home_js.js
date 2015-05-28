$(document).ready(function(){

  $('.drop-down-menus').mouseover(function() {
    $('.drop-down-menus').css("background-color", "#00F7C3");
    $('.link-listing').css("color", "white");
  }).mouseout(function(){
    $('.drop-down-menus').css("background-color", "white");
    $('.link-listing').css("color", "#FCC26E");
  });

  $('.music-videos_tapes-container').mouseover(function() {
    $('.music-videos_tapes-container').css('background-color', '#00F7C3');
  }).mouseout(function(){
    $('.music-videos_tapes-container').css('background-color', 'white');
  });

  $('.music-news-container_1').mouseover(function() {
    $('.category-header-music-1').css('background-color', '#00F7C3');
    $('.title-header-music-1').css('color', '#FCC26E');
  }).mouseout(function(){
    $('.category-header-music-1').css('background-color', 'white');
    $('.title-header-music-1').css('color', 'black');
  });

  $('.music-news-container_2').mouseover(function() {
    $('.category-header-music-2').css('background-color', '#00F7C3');
    $('.title-header-music-2').css('color', '#FCC26E');
  }).mouseout(function(){
    $('.category-header-music-2').css('background-color', 'white');
    $('.title-header-music-2').css('color', 'black');
  });

  $('#lifestyle-news-container_1').mouseover(function() {
    $('.category-header-lifestyle-1').css('background-color', '#00F7C3');
    $('.title-header-lifestyle-1').css("color", '#FCC26E')
  }).mouseout(function(){
    $('.category-header-lifestyle-1').css('background-color', 'white');
    $('.title-header-lifestyle-1').css("color", 'black')
  });

   $('#lifestyle-news-container_2').mouseover(function() {
    $('.category-header-lifestyle-2').css('background-color', '#00F7C3');
    $('.title-header-lifestyle-2').css("color", '#FCC26E')
  }).mouseout(function(){
    $('.category-header-lifestyle-2').css('background-color', 'white');
    $('.title-header-lifestyle-2').css("color", 'black')
  });








});
