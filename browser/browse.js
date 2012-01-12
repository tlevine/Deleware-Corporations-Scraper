var URL='http://hacks.thomaslevine.com';
var DIGGER_KEY='uoeusrch9898goun';
/*
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

getResultsPage=function(searchterm,callback){

}
*/

function main(){
  $.ajax({
    url: URL
  , type: 'GET'
  , data: JSON.stringify({
      "digger-key":DIGGER_KEY
    })
  , dataType: 'json'
  , contentType: "application/json"
  , success: function(r){
    var html=$('#mainBody').html();
    $.ajax({
      url: URL
    , type: 'POST'
    , data: JSON.stringify({
        "searchterm":r.searchterm
      , "html":html
      , "shows_all"=shows_all()
      })
    , dataType: 'json'
    , contentType: "application/json"
    , success: function(r){
        search(r.searchterm);
      }
    });
  });
}

function shows_all(){
  return 1===$('b:contains("Only the first 50 are displayed")').length;
}

function search(searchterm){
  document.getElementsByName('frmEntityName')[0].value=searchterm;
  $('input[name="action"]').click();
}
