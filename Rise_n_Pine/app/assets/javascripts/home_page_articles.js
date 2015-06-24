$(document).ready(function(){

   var response = $.ajax({
      url: 'http://localhost:3000/articles_index/',
      type: "GET"
    });

  response.done(function(data){

    var count = 0;

    while (count < data.length) {
      var newsContainer = $('<div class="news-container"></div>');
      var categoryHeader = $('<div class="news-header"></div>');
      var titleHeader = $('<div class="title-container"></div>');
      var photoLinkContainer = $('<div class="photo_link-container"></div>');
      var descriptionContainer = $('<div class="description-container"></div>');
      var a_href = $('<a class="continue" href="http://localhost:3000/articles/' + data[count].id + '">Continue Reading...</a>')
      var tagContainer = $('<div class="tag-container"></div>');

      var artist = data[count].artist;
      var author = data[count].author;
      var category = data[count].category.split(" ");

      for (i=0; i < category.length; i++){
        var tag_link = $('<a href="">'+ category[i] +  '</a>')
        tagContainer.append(tag_link)
        tagContainer.append(" ")
      };


      var date = data[count].date;
      var description = data[count].description;
      var image = data[count].image;
      var title = data[count].title;

      categoryHeader.append(title);
      categoryHeader.append(' ');
      categoryHeader.append(author);
      photoLinkContainer.append(image);
      descriptionContainer.append(description)
      descriptionContainer.append(a_href);

      newsContainer.append(categoryHeader)
      newsContainer.append(titleHeader)
      newsContainer.append(photoLinkContainer)
      newsContainer.append(descriptionContainer)
      newsContainer.append(tagContainer)
      $('.articles-container').append(newsContainer)
      count++
    };

    console.log(data[4].image)
  });

});