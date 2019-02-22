// Create new XMLHttpRequest
var request = new XMLHttpRequest(),
              method = "GET",
              url = "xxxx"; // Add API url

request.open(method, url, true);

request.onload = function () {
  // begin accessing JSON data here
  var data = JSON.parse(this.response);

  var listItems = [],
       n;

  // Loop through available data fetched from api
  for (var i = 0; i < data.length; i++) {

    console.log( data[i].name );
    n = '<h3>' + data[i].name + '</h3>';

    listItems.push( n );
  }
  document.getElementById("demo").innerHTML = listItems.join("");
}
request.send();
