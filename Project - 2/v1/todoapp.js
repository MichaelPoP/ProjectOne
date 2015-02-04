// ## Getting started

// 1. When the user submits the form, the todo should be added to the DOM (you can use `li`)
// 2. When the user checks the box next to the todo, it should add a class of "completed"
// which strikes through the todo (check out the text-decoration property in CSS)
// 3. When the user unchecks a box, the class of completed should be removed
// 3. When the user clicks the remove button, the todo should be removed from the DOM. 
// Make sure that the correct todo is removed from the DOM (if you remove the 5th todo,
// make sure that one is deleted) 

// ### jQuery methods you may use 

// * addClass()
// * removeClass()
// * append() or prepend()
// * remove()
// * val()
// * text()
// * parent()
// * next()
// * on()
// * first()

$(document).ready(function(){
    $("form").on("submit", function() {
    	var item = $("input").first().val();
        var checkbox = "<input class='check' type='checkbox'>";
        var button = "<button class='remove'>X</button>";
        var todo = $("<li>" + checkbox + item + button + "</li>").fadeIn(600);
        
        $("ol").append(todo);
        $("#stuff").val("");
    });

	        $("ol").on("click",".check", function() {
		        $(this).parent().toggleClass("completed");
		       
		    });
	       //remember that the "ol" here is the delegate! this is what deals with
	       //the remove, you are removing from the ol not the li itself.
	       //for this reason you need to understand where its children and parents are
	    
		    $("ol").on("click", ".remove", function () {
		        $(this).fadeOut(350, function () {
		       	    $(this).parent().fadeOut();
		        });
            });
});



// $(".list").on("click", ".remove", function () {
// 		        	var pops = $(this).closest('li');
// 		        	pops.fadeOut(500, function(){
//                         pops.remove();
// 		        	});
// 		    });






     //$(this).remove("li");






// var n = 0;
// $(document).ready(function(){
//     $("form").on("submit", function() {
//     	n = n + 1;
//     	var item = $("input").first().val();
//         var checkbox = "<input class='check' type='checkbox'>";

//         $("body").append("<li id='li"+n+"'>" + item + checkbox + "</li>"); 

// 	    $("#li"+n+"").on("click", function() {
// 	        $("#li"+n+"").addClass("completed");
	        
// 	    });
//     });
  
// });




// var button = "<button>X</button>";





//***************WORKING DONT FUCK UP!

// $(document).ready(function(){
//     $("form").on("submit", function() {
    	
//     	var item = $("input").first().val();
//         var checkbox = "<input class='check' type='checkbox'>";
//         var button = "<button class='remove'>X</button>";

//         $("ol").append("<li>" + checkbox + item + button + "</li>"); 
//     });

// 	        $("ol").on("click",".check", function() {
// 		        $(this).parent().toggleClass("completed");
		       
// 		    });
	       
	    
// 		    $("ol").on("click", ".remove", function () {
// 		        $(this).fadeOut(350, function () {
// 		       	    $(this).parent().fadeOut();
// 		        });
//             });
// });
