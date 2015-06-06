// $(document).ready(function() {

//   var randomString = function(length) {
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     for(var i = 0; i < length; i++) {
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return text;
// }

  var oauth_consumer_key = "9NREEZKiTetQt9IdN8i0hiV03";
  var oauth_nonce = randomString(32);
  var oauth_timestamp = Math.round((new Date()).getTime() / 1000.0);
  var oauth_signature_method = "HMAC-SHA1";
  var oauth_token="2980110189-NYVnhc15CtoYuCUXbSPwiQTzhXRHFyuAq8DkDvt";
  var oauth_consumer_key="9NREEZKiTetQt9IdN8i0hiV03";
//   // var oauth_callback =

//   // var oauth_callback = "http://localhost:3000/articles, twitterclient://callback"


// var signatureBaseString = "POST&" + encodeURIComponent("https://api.twitter.com/oauth/request_token") + "&";
//   signatureBaseString += encodeURIComponent("oauth_callback=https://www.example.com&");
//   signatureBaseString += encodeURIComponent("oauth_consumer_key=" + oauth_consumer_key + "&");
//   signatureBaseString += encodeURIComponent("oauth_nonce=" + oauth_nonce + "&");
//   signatureBaseString += encodeURIComponent("oauth_signature_method=HMAC-SHA1&");
//   signatureBaseString += encodeURIComponent("oauth_timestamp=" + oauth_timestamp + "&");
//   signatureBaseString += encodeURIComponent("oauth_version=1.0");


// var secret_signing_key = consumer_secret_key + "&" + oauth_token_secret
// var encodedSignature = encodeURIComponent(signature);


// var response = $.ajax({
//   url:
// })


// });
// Authorization: OAuth oauth_consumer_key="keyhere",oauth_timestamp="12345",oauth_signature_method="HMAC-SHA1',oauth_nonce="qwerty",oauth_version="1.0",oauth_signature="signaturehere"
