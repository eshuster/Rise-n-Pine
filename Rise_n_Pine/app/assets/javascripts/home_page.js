$(document).ready(function(){

//   var xhr = new XMLHttpRequest();

//   xhr.onload = function(response) {

//     if (xhr.status === 200){
//       // debugger
//       var parser = new DOMParser();
//       var xmlDoc=parser.parseFromString(xhr.responseText,"text/xml");
//       var title = xmlDoc.getElementsByClassName("title-listing");
//       var date = xmlDoc.getElementsByClassName("date-listing");
//       var author = xmlDoc.getElementsByClassName("author-listing");
//       var category = xmlDoc.getElementsByClassName("category-listing");
//       var description = xmlDoc.getElementsByClassName("description-listing");

//       var lifestyle_cat_1 = category[0].innerHTML
//       var lifestyle_cat_2 = category[1].innerHTML
//       var music_cat_1 = category[2].innerHTML
//       var music_cat_2 = category[3].innerHTML
//       $('.category-header-music-1').append(music_cat_1);
//       $('.category-header-music-2').append(music_cat_2);
//       $('.category-header-lifestyle-1').append(lifestyle_cat_1);
//       $('.category-header-lifestyle-2').append(lifestyle_cat_2);

//       var lifestyle_title_1 = title[0].innerHTML
//       var lifestyle_title_2 = title[1].innerHTML
//       var music_cat_title_1 = title[2].innerHTML
//       var music_cat_title_2 = title[3].innerHTML

//       var lifestyle_date_1 = date[0].innerHTML
//       var lifestyle_date_2 = date[1].innerHTML
//       var music_date_1 = date[2].innerHTML
//       var music_date_2 = date[3].innerHTML

//       var lifestyle_author_1 = author[0].innerHTML
//       var lifestyle_author_2 = author[1].innerHTML
//       var music_author_1 = author[2].innerHTML
//       var music_author_2 = author[3].innerHTML

//       $('.title-header-music-1').html(music_cat_title_1);
//       $('.title-header-music-1').append('<br>' + '<p class="title">' + music_date_1 + " by" + music_author_1 + '</p>')

//       $('.title-header-music-2').html(music_cat_title_2);
//       $('.title-header-music-2').append("<br>" + '<p class="title">' + music_date_2 + " by" + music_author_2 + '</p>')

//       $('.title-header-lifestyle-1').html(lifestyle_title_1);
//       $('.title-header-lifestyle-1').append("<br>" + '<p class="title">' + lifestyle_date_1 + " by" + lifestyle_author_1 + '</p>')

//       $('.title-header-lifestyle-2').html(lifestyle_title_2);
//       $('.title-header-lifestyle-2').append("<br>" + '<p class="title">' + lifestyle_date_1 + " by" + lifestyle_author_1 + '</p>')

//       $('.date-header-music-1').html(music_cat_title_1);
//       $('.date-header-music-2').html(music_cat_title_2);
//       $('.date-header-lifestyle-1').html(lifestyle_title_1);
//       $('.dae-header-lifestyle-2').html(lifestyle_title_2);

//       var lifestyle_description_1 = description[0].innerHTML
//       var lifestyle_description_2 = description[1].innerHTML
//       var music_description_1 = description[2].innerHTML
//       var music_description_2 = description[3].innerHTML
//       $('.description-container-music-1').html(music_description_1);
//       $('.description-container-music-2').html(music_description_2);
//       $('.description-container-lifestyle-1').append(lifestyle_description_1);
//       $('.description-container-lifestyle-2').append(lifestyle_description_2);
//     }
//   };

// xhr.open('GET', 'http://localhost:3000/articles', true);
// xhr.send();

});