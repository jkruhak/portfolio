$(document).ready(function(){
	$(window).load(function() {
		$("#loadedProject").hide();
	});

	//animate scroll when clicked on navigation link
	$('a[href^="#"]').on('click',function(event) {
	    event.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	//Load Shopping List App in window when link clicked
	$("#projectOneInternal").on("click", function() {
		projectLoad();

		$("#projectLoaded").html("<object type='text/html' data='http://jkruhak.github.io/shoppingListApp/main.html'></object>");
	});

	//Load Fizz Buzz App in window when link clicked
	$("#projectTwoInternal").on("click", function() {
		projectLoad();

		$("#projectLoaded").html("<object type='text/html' data='http://jkruhak.github.io/FizzBuzz2/main.html'></object>");
	});

	//Load Hot or Cold App in window when link clicked
	$("#projectThreeInternal").on("click", function() {
		projectLoad();
		
		$("#projectLoaded").html("<object type='text/html' data='http://jkruhak.github.io/hot-or-cold-app/index.html'></object>");
	});

	//Load Quiz App in window when link clicked
	$("#projectFourInternal").on("click", function() {
		projectLoad();

		$("#projectLoaded").html("<object type='text/html' data='http://jkruhak.github.io/quizApp/index.html'></object>");
	});

	//Load Stackoverflow Top Answerers App in window when link clicked
	$("#projectFiveInternal").on("click", function() {
		projectLoad();

		$("#projectLoaded").html("<object type='text/html' data='http://jkruhak.github.io/topAnswerers/index.html'></object>");
	});

	//Load API Hack App in window when link clicked
	$("#projectSixInternal").on("click", function() {
		projectLoad();

		$("#projectLoaded").html("<object type='text/html' data='http://jkruhak.github.io/apiHack/index.html'></object>");
	});

	projectClose();
});

//Animate project loading into window
var projectLoad = function() {
	
	$("#loadedProject").animate({
		"opacity": "show"}, 1500);

	$("#projectList").hide();

	document.getElementById("projectName").innerHTML='<img src="images/xMark.png" id="xMark">';
};

//Animate when X clicked to close project
var projectClose = function() {
	$("#headerProject").on("click", "#xMark", function() {
			
		$("#projectList").animate({
		"opacity": "show"}, 1500);

		$("#loadedProject").hide();
	});
};