$(document).ready(function(){
$.getJSON("http://content.guardianapis.com/us?show-most-viewed=true&api-key=ckx2b7259waj8zcbbqdmxw9e", function (data) {
		
			console.log(data);
			//data is the object that contains all the movie results
			if (data.Error) {
				$results.html("No results found.");

			} else {
    			for (var i = 0; i < data.response.mostViewed.length ; i++) {
    			var button = "<button class='remove'>X</button>";
                	$("ol").append($("<li><u>" + data.response.mostViewed[i].sectionName + "</u></br><a href='" + data.response.mostViewed[i].webUrl + "'>" + data.response.mostViewed[i].webTitle + "</a>" + " " + button + "</li>").fadeIn(400));
                	$("#searchbox").val("");
                }
            }
            
                
	    });
});

$("ol").on("click", ".remove", function () {
    $(this).fadeOut(300, function () {
		$(this).parent().fadeOut();
	});
});

$("img").on("mouseover", function() {
		        $(this).addClass("animated infinite pulse");
		       
});
$("img").on("mouseout", function() {
		        $(this).removeClass("animated infinite pulse");
		       
});

// $('#img').addClass('animated pulse');


// var quote = document.getElementById('q1');
// var quote1 = document.getElementById('q2');
// var quote2 = document.getElementById('q3');
// var quote3 = document.getElementById('q4');


// setTimeout(function () {quote.className += " vis"}, 3000);

// setTimeout(function () {quote.className += " hid"}, 5000);

// setTimeout(function () {quote1.className += " vis"}, 6000);

// setTimeout(function () {quote1.className += " hid"}, 8000);

// setTimeout(function () {quote2.className += " vis"}, 9000);

// setTimeout(function () {quote2.className += " hid"}, 11000);

// setTimeout(function () {quote3.className += " vis"}, 12000);

// setTimeout(function () {quote3.className += " hid"}, 15000);





$(window).load(function() { //start after HTML, images have loaded
 
 });
var quote = document.getElementById('q1');
var quote1 = document.getElementById('q2');
var quote2 = document.getElementById('q3');
var quote3 = document.getElementById('q4');
         



var doitagain = function  ()  { 

setTimeout(function () {quote.className += " vis"}, 3000);

setTimeout(function () {quote.className += " hid"}, 5000);

setTimeout(function () {quote1.className += " vis"}, 6000);

setTimeout(function () {quote1.className += " hid"}, 8000);

setTimeout(function () {quote2.className += " vis"}, 9000);

setTimeout(function () {quote2.className += " hid"}, 11000);

setTimeout(function () {quote3.className += " vis"}, 12000);

setTimeout(function () {quote3.className += " hid"}, 15000);
                 

};
 
    doitagain();
   
 























// i=0;
// setInterval(function() {
//     if (i == messages.length)
//      { some action }
//     else
//     {
//         $('#message').fadeIn(*time*).delay(*time*).html(words[i]).fadeOut(*time*);
//         i++;  //counter, set to 0 initially
//     }
// }, x * 1000); //repeats actions after every x seconds.












