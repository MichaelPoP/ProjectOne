function changeLink (event) {
	console.log(event);

    event.target.style.outline = "4px outset #5e79ad";
//use 'event.target' in order to loop through a lot of events that you don't want to individually name
}
function changeLinkBack (event) {

    event.target.style.outline = "";

}



 var boxes= document.getElementsByClassName("fcolor");
 console.log(boxes);
  for (var i = 0; i < boxes.length; i++) {
  	

 boxes[i].addEventListener("mouseover", changeLink);
 boxes[i].addEventListener("mouseout", changeLinkBack);
   }