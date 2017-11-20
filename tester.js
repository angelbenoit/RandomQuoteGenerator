
var colors = [
    "blue",
    "green",
    "yellow",
    "gray",
    "purple",
    "orange",
    "red",
    "aqua",
    "aquamarine",
    "blueviolet",
    "brown",
    "chocolate"
];
//placeholder that will hold a string to be tweeted
var stringToTweet = "";


//waits for user to click button
$(document).ready(function () {
   $('#btn').click(function () {
       //once user clicks button, it will call the method and changes background color
       colorChange();
       fetchAndDisplayData();
   });
    //will run if user wants to tweet the quote
    $('#btn1').click(function () {
        twitterButton();
    })
});

function fetchAndDisplayData(){
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function (result) {
        //gets quote and author string from json after being formatted by getJSON
        var quote = '"' + result.quoteText + '"';
        var author = '   -' + result.quoteAuthor;
        //puts quote and author into the placeholders
        $('#placeholder').html(quote);
        $('#placeholder2').html(author);
        //combines quote and string into the stringToTweet variable
        stringToTweet = quote + "\n" + author;
    });
}

function twitterButton() {
    if (stringToTweet.length > 0) {
        var tweet = 'https://twitter.com/home?status=' + encodeURIComponent(stringToTweet);
            window.open(tweet,'_blank');
        }
    //if user tries to tweet an empty tweet, will notify user
        else{
            $('#placeholder').html("Can't tweet a blank quotes");
        }

}

function colorChange(){
    var num = Math.floor((Math.random() * 11) + 1);
    $('#back').css("background-color", colors[num]);
    $('#title').css("color", colors[num]);
    $('#back2').css("background", colors[num]);
    $('#btn').css("color", colors[num]);
    $('#btn1').css("color", colors[num]);
}