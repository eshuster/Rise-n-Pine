$(document).ready(function(){


$('body').on("mouseover", "nav", function(){
    $('nav').css("background-color", "#00F7C3");
    // $('.link-listing').css("color", "white");
  }).mouseout(function(){
    $('nav').css("background-color", "white");
    // $('.link-listing').css("color", "#FCC26E");
  });

$('body').on("mouseover", "footer", function(){
    $('footer').css("background-color", "#00F7C3");
    // $('.link-listing').css("color", "white");
  }).mouseout(function(){
    $('footer').css("background-color", "white");
    // $('.link-listing').css("color", "#FCC26E");
  });





  $('body').on("mouseover", ".news-header", function(){
    $(this).css('background-color', '#00F7C3');
    $('.title-header').css('color', '#FCC26E');
  }).on("mouseout", ".news-header", function(){
    $(this).css('background-color', 'white');
    $('.title-header').css('color', 'black');
  });

})
