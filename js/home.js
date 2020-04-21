/* Animation for door opening & closing on the home page */
var doors = document.getElementsByClassName("door");
for (var i = 0; i < doors.length; i++){
	doors[i].addEventListener("click", function(e){
		e.preventDefault();
		this.classList.toggle("doorOpen");
		var this_href = $(this).children("a:first").attr("href");
		setTimeout(function(){
			window.location = this_href;
		}, 1500);
	}, false);
}