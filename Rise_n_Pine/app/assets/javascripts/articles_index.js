$(document).ready(function(){

  var xhr = new XMLHttpRequest();

  xhr.onload = function(response) {
    console.log(xhr.responseText)

    if (xhr.status === 200){
      var parser = new DOMParser();
      var xmlDoc=parser.parseFromString(xhr.responseText,"text/xml");
    };
  };

    xhr.open('GET', 'http://localhost:3000/articles', true);
    xhr.send();

});