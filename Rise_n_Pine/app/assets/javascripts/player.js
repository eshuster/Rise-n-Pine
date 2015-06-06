$(document).ready(function(){

  var riseID = 5491105;

  var client_id = 'e6c3d4844042b236a265e429c48361f3';

  var playlist = "http://api.soundcloud.com/users/5491105/playlists.json?client_id=e6c3d4844042b236a265e429c48361f3";

  var favorites = "http://api.soundcloud.com/users/5491105/favorites.json?client_id=e6c3d4844042b236a265e429c48361f3";

  var following = "http://api.soundcloud.com/users/5491105/followings.json?client_id=e6c3d4844042b236a265e429c48361f3";

  var followers = "http://api.soundcloud.com/users/5491105/followers.json?client_id=e6c3d4844042b236a265e429c48361f3";

  var groups = "http://api.soundcloud.com/users/5491105/groups.json?client_id=e6c3d4844042b236a265e429c48361f3";

  var request = $.ajax({
    url: 'http://soundcloud.com/oembed?format=json&maxheight=65&url=https://soundcloud.com/rise-3/likes' ,
    type: "GET"
  });

request.done(function(data){
  // console.log(data);

  var html = data.html;
  // console.log(html)

  $('.mp3-player-container').append(html);


})



});


