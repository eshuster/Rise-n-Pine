$(document).ready(function(){

  $('input[type="submit"]').on("click", function(event){
    event.preventDefault();
    var search_title = $('input[type="text"]').val();
    console.log(search_title)

    var response = $.ajax({
      url: 'http://localhost:3000/articles_search/' + search_title,
      type: "get"
    });

  response.done(function(data){
    // var count = 0;
    console.log(data)
  //   while (count < data.length) {
  //     var category = data[count].category;
  //     if (category === "Music") {
  //       var musicHeader = $('<div class="articles-music-header"></div>')
  //       var Header = $('<div></div>')
  //       var a_href = $('<a class="article-edit-link"  href="http://localhost:3000/articles/' + data[count].id  + '/edit"' + ' ' + '>Edit</a>');
  //       var s_href = $('<a class="article-edit-link" href="http://localhost:3000/articles/' + data[count].id + '">Show</a>');
  //       var d_href = $('<a class="article-edit-link" href="http://localhost:3000/articles/' + data[count].id + '/destroy">Delete</a>');

  //       musicHeader.append("&nbsp;" + data[count].id + ". ");
  //       musicHeader.append("&nbsp;" + data[count].title);
  //       musicHeader.append("&nbsp;" + data[count].author);
  //       musicHeader.append("&nbsp;" + data[count].date);

  //       Header.append(s_href[0]);
  //       Header.append(a_href[0]);
  //       Header.append(d_href[0]);
  //       musicHeader.append(Header)

  //       $('.main-cont-left-1').append(musicHeader)
  //         count++;
  //     } else {
  //       var newsHeader = $('<div class="articles-news-header"></div>');
  //       var Header = $('<div></div>');
  //       var a_href = $('<a class="article-edit-link"  href="http://localhost:3000/articles/' + data[count].id  + '/edit"' + ' ' + '>Edit</a>');
  //       var s_href = $('<a class="article-edit-link" href="http://localhost:3000/articles/' + data[count].id + '">Show</a>');
  //       var d_href = $('<a class="article-edit-link" href="http://localhost:3000/articles/' + data[count].id + '/destroy">Delete</a>');

  //       newsHeader.append("&nbsp;" + data[count].id + ". ");
  //       newsHeader.append("&nbsp;" + data[count].title);
  //       newsHeader.append("&nbsp;" + data[count].author);
  //       newsHeader.append("&nbsp;" + data[count].date);;

  //       Header.append(s_href[0]);
  //       Header.append(a_href[0]);
  //       Header.append(d_href[0]);
  //       newsHeader.append(Header)

  //       $('.main-cont-righ-1').append(newsHeader);
  //         count++;
  //     };
  //   };
  // });
    });
  });
});