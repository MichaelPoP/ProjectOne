
//APPLIES THE INFINITE PULSE ANIMATION TO THE PORTRAITS 

$("ol").on("click", ".remove", function () {
    $(this).fadeOut(300, function () {
		$(this).parent().fadeOut();
	});
});


$(".portrait").on("mouseover", function() {
		        $(this).addClass("animated infinite pulse");
		       
});

$(".portrait").on("mouseout", function() {
		        $(this).removeClass("animated infinite pulse");
		       
});





//THIS CODE HANDLES THE API REQUESTS

$(document).ready(function(){


	// GUARDIAN NEWS API REQUEST
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


// BUREAU OF ECONOMIC ANALYSIS API REQUEST


    $("form").on("submit", function(event) {
	        event.preventDefault();
	        var year = this.name.value;
	        console.log(year);
	        $("#popdata").text("");

        $.getJSON("http://www.bea.gov/api/data/?&UserID=B4E7AA38-E87E-4422-9E5B-5199C8706CE2&method=GetData&datasetname=RegionalData&KeyCode=POP_SI&GeoFIPS=STATE&Year=" + year + "&ResultFormat=json&jsonp=?", function (data) {

			console.log(data);
			//data is the object that contains all the movie results
			if (data.BEAAPI.Results.Error) {
				

			} else {
    			for (var i = 0; i < data.BEAAPI.Results.Data.length ; i++) {
    			
                	$("#popdata").append($("<li>" + data.BEAAPI.Results.Data[i].TimePeriod + " - "+ data.BEAAPI.Results.Data[i].GeoName + " | Pop: " + data.BEAAPI.Results.Data[i].DataValue + "</li>").fadeIn(400));
                	$("#searchbox").val("");
                }
            }

        });    
                
    });


	$("form").on("submit", function(event) {
        event.preventDefault();
        var year = this.name.value;
        console.log(year);
        $("#wagedata").text("");

        $.getJSON("http://www.bea.gov/api/data/?&UserID=B4E7AA38-E87E-4422-9E5B-5199C8706CE2&method=GetData&datasetname=RegionalData&KeyCode=PCPI_SI&GeoFIPS=STATE&Year=" + year + "&ResultFormat=json&jsonp=?", function (data) {
			console.log(data);
			//data is the object that contains all the movie results
			if (data.BEAAPI.Results.Error) {
				alert("Enter a Valid Year");
				$("#searchbox").val("");

			} else {
    			for (var i = 0; i < data.BEAAPI.Results.Data.length ; i++) {
    			
                	$("#wagedata").append($("<li>" + data.BEAAPI.Results.Data[i].TimePeriod + " - "+ data.BEAAPI.Results.Data[i].GeoName + " | Per Cap. Income: $" + data.BEAAPI.Results.Data[i].DataValue + "(/yr)" + "</li>").fadeIn(400));
                	$("#searchbox").val("");
                }
            }

        });

    

    });


// });  DOCUMENT READY IN DOC READY >>> CHECK IF I REALLY NEED THIS?












});  //DOCUMENT READY CLOSE






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
 
 
var quote = $('#q1');
var quote1 = $('#q2');
var quote2 = $('#q3');
var quote3 = $('#q4');
         



var doitagain = function  ()  { 

setTimeout(function () {
	quote.addClass("vis");
}, 1000);

setTimeout(function () {
	quote.removeClass("vis");
}, 6000);

setTimeout(function () {
	quote1.addClass("vis");
}, 7500);

setTimeout(function () {
	quote1.removeClass("vis");
}, 12500);

setTimeout(function () {
	quote2.addClass("vis");
}, 14000);

setTimeout(function () {
	quote2.removeClass("vis");
}, 19000);

setTimeout(function () {
	quote3.addClass("vis");
}, 20500);

setTimeout(function () {
	quote3.removeClass("vis");
	doitagain();
}, 25500);        

};
 
    doitagain();
   
});



















// CAN I DO THIS WITH JQUERY???


// $(document).ready(function(){
  
// // var pops = $("<h3>'If Knowledge is Power and Ignorance is Bliss, Then Why Arent We Happy Being Powerless?'</h3>").fadeIn(300);

// // $('p').append(pops);




// $('p').append("<h3>'If Knowledge is Power and Ignorance is Bliss, Then Why Arent We Happy Being Powerless?'</h3>").fadeIn(3000);



// });

















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












