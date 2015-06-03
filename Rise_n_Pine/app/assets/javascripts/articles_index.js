$(document).ready(function(){


  var response = $.ajax({
    url: 'http://localhost:3000/articles_index/',
    type: "GET"
  });

  response.done(function(data){
  console.log(data);

  var count = 0;

  while (count < data.length) {
    var category = data[count].category;
    console.log(category)
    if (category === "Music") {
      var musicHeader = $('<div class="articles-music-header"></div>')
      var href = $('<a class="article-index-link"  href="http://localhost:3000/articles/' + data[count].id  + '/edit"' + ' ' + '>Edit</a>');

      musicHeader.append("&nbsp;" + data[count].id + ". ");
      musicHeader.append("&nbsp;" + data[count].title);
      musicHeader.append("&nbsp;" + data[count].author);
      musicHeader.append("&nbsp;" + data[count].date);
      musicHeader.append(href[0]);
      $('.main-cont-left').append(musicHeader)
      count++;

    } else {

      var newsHeader = $('<div class="articles-news-header"></div>');
      var href = $('<a class="article-index-link"  href="http://localhost:3000/articles/' + data[count].id  + '/edit"' + ' ' + '>Edit</a>');

      newsHeader.append("&nbsp;" + data[count].id + ". ");
      newsHeader.append("&nbsp;" + data[count].title);
      newsHeader.append("&nbsp;" + data[count].author);
      newsHeader.append("&nbsp;" + data[count].date);;
      newsHeader.append(href[0]);
      $('.main-cont-right').append(newsHeader);

      count++;

      };
    }


  });






});






