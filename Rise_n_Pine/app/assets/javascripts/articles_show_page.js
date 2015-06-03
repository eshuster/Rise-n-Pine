$(document).ready(function(){

  $('.articles-show-related-posts-container').on("click", function(event) {
    var id = $(this).parent().attr("id")
    var artist = $('.articles-artist-show').text()
    var ul = $('<ul></ul>')

    var response = $.ajax({
      url: 'http://localhost:3000/searchartist/' + artist,
      type: "GET"
    });

    response.done(function(data){
      var count = 0
      while (count < data.length){
        var li = $('<li class="modal-artist-box"></li>');
        var a_href = $('<a class="modal-options" href="http://localhost:3000/articles/' + data[count].id + '">Show</a>');
        li.append(a_href);
        ul.append(li);
        count++;
      };

      var myModal = new Modal ({
        content: "" + $(ul).html(),
        maxWidth: 600,
      });

    myModal.open();
    });
  });
});


