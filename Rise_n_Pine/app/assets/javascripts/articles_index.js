$(document).ready(function(){

  var ul = $('<ul></ul>')

  var response = $.ajax({
    url: 'http://localhost:3000/articles_index/',
    type: "GET"
  });

  response.done(function(data){
    var count = 0;
    while (count < data.length) {
      var category = data[count].category;
      if (category === "Music") {
        var musicHeader = $('<div class="articles-music-header"></div>')
        var Header = $('<div></div>')
        var a_href = $('<a class="article-edit-link"  href="http://localhost:3000/articles/' + data[count].id  + '/edit"' + ' ' + '>Edit</a>');
        var s_href = $('<a class="article-edit-link" href="http://localhost:3000/articles/' + data[count].id + '">Show</a>');
        var d_href = $('<a class="article-edit-link" href="http://localhost:3000/articles/' + data[count].id + '/destroy">Delete</a>');

        musicHeader.append("&nbsp;" + data[count].id + ". ");
        musicHeader.append("&nbsp;" + data[count].title);
        musicHeader.append("&nbsp;" + data[count].author);
        musicHeader.append("&nbsp;" + data[count].date);

        Header.append(s_href[0]);
        Header.append(a_href[0]);
        Header.append(d_href[0]);
        musicHeader.append(Header)

        $('.main-cont-left').append(musicHeader)
          count++;
      } else {
        var newsHeader = $('<div class="articles-news-header"></div>');
        var Header = $('<div></div>');
        var a_href = $('<a class="article-edit-link"  href="http://localhost:3000/articles/' + data[count].id  + '/edit"' + ' ' + '>Edit</a>');
        var s_href = $('<a class="article-edit-link" href="http://localhost:3000/articles/' + data[count].id + '">Show</a>');
        var d_href = $('<a class="article-edit-link" href="http://localhost:3000/articles/' + data[count].id + '/destroy">Delete</a>');

        newsHeader.append("&nbsp;" + data[count].id + ". ");
        newsHeader.append("&nbsp;" + data[count].title);
        newsHeader.append("&nbsp;" + data[count].author);
        newsHeader.append("&nbsp;" + data[count].date);;

        Header.append(s_href[0]);
        Header.append(a_href[0]);
        Header.append(d_href[0]);
        newsHeader.append(Header)

        $('.main-cont-right').append(newsHeader);
          count++;
      };
    };
  });
});
