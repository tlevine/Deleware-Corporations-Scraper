//Define some search results page class
//...
//Done

//Initialize
var p=ResultsPage(document,user_uuid,user_apikey);

//Send the text of the page to the server
p.send(function(){
  if p.shows_all(){
    //Iterate through the results
  } else {
    //Try a new search with another letter before the wildcard.
  }
}
