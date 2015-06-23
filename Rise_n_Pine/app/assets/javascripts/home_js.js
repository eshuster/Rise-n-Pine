$(document).ready(function(){


$('body').on("mouseover", ".drop-down-menus", function(){
    $('.drop-down-menus').css("background-color", "#00F7C3");
    $('.link-listing').css("color", "white");
  }).mouseout(function(){
    $('.drop-down-menus').css("background-color", "white");
    $('.link-listing').css("color", "#FCC26E");
  });

  $('body').on("mouseover", ".news-header", function(){
    $(this).css('background-color', '#00F7C3');
    $('.title-header').css('color', '#FCC26E');
  }).on("mouseout", ".news-header", function(){
    $(this).css('background-color', 'white');
    $('.title-header').css('color', 'black');
  });

})
