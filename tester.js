
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

var tempString = "";


//waits for user to click button
$(document).ready(function () {
   $('#btn').click(function () {
       //once user clicks button, it will call the method and changes background color
       colorChange();
       fetchAndDisplayData();
   })

    $('#btn1').click(function () {
        twitterButton();
    })
});

function fetchAndDisplayData(){
    $.ajax({
        url: "https://random-quote-generator.herokuapp.com/api/quotes/",
        method: "GET"
    }).done(function (data) {
        var num = Math.floor((Math.random() * 15) + 1);
        var quote = 'Quote : "' + data[num].quote + '"';
        var author = '   -' + data[num].author;
        $('#placeholder').html(quote + "<br>" + "<br>");
        $('#placeholder2').html(author);
        tempString = "Quote: " + quote + "\n" + "" + author;
    })
}

function twitterButton() {
        if(tempString.length > 0){
            var tweet = 'https://twitter.com/home?status=' +encodeURIComponent(tempString);
            window.open(tweet,'_blank');
        }
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