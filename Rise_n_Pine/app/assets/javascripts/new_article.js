$(document).ready(function(){


  $('.article_submit').on("click", function(event){
    // event.preventDefault();
    console.log("success");

    var title = $("article_title").val();
    var date = $("article_date").val();
    var author = $("article_author").val();
    var category = $('#article_category').val();
    var description = $("#article_description").val();

  });
});