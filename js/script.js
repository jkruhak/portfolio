$(document).ready(function(){
	$(window).load(function() {
		$("#loadedProject").hide();
	});

	//animate scroll when clicked on navigation link
	navigationLink();

	//Back to Top button
	backToTopButton();
	
	//Close project when X clicked
	projectClose();

	//Close project when clicked anywhere on page
	$("#portfolio").on("click", function(event) {
		event.stopPropagation();
	});

	$(document).on("click", function() {
		
			
		$("#projectList").animate({
		"opacity": "show"}, 1500);

		$("#loadedProject").hide();
	});

	//Load Shopping List App in window when link clicked
	$("#projectOneInternal").on("click", function() {
		projectLoad();

		$("#projectLoaded").html("<object type='text/html' data='http://jkruhak.github.io/shoppingListApp/main.html'></object>");
		$("#projectName").prepend("<a href='http://jkruhak.github.io/shoppingListApp/main.html' target='_blank'><h3>Shopping List App</h3></a><br><p>A shopping list to help you remember what to get on your next shopping trip</p>");
	});

	//Load Fizz Buzz App in window when link clicked
	$("#projectTwoInternal").on("click", function() {
		projectLoad();

		$("#projectLoaded").html("<object type='text/html' data='http://jkruhak.github.io/FizzBuzz2/main.html'></object>");
		$("#projectName").prepend("<a href='http://jkruhak.github.io/FizzBuzz2/main.html' target='_blank'><h3>Fizz Buzz App</h3></a><br><p>A simple app that outputs phrases or numbers based on the input.</p>");
	});

	//Load Hot or Cold App in window when link clicked
	$("#projectThreeInternal").on("click", function() {
		projectLoad();
		
		$("#projectLoaded").html("<object type='text/html' data='http://jkruhak.github.io/hot-or-cold-app/index.html'></object>");
		$("#projectName").prepend("<a href='http://jkruhak.github.io/hot-or-cold-app/index.html' target='_blank'><h3>Hot or Cold App</h3></a><br><p>You against the computer. See how many tries it takes you to guess the number computer has chosen.</p>");
	});

	//Load Quiz App in window when link clicked
	$("#projectFourInternal").on("click", function() {
		projectLoad();

		$("#projectLoaded").html("<object type='text/html' data='http://jkruhak.github.io/quizApp/index.html'></object>");
		$("#projectName").prepend("<a href='http://jkruhak.github.io/quizApp/index.html' target='_blank'><h3>Quiz App</h3></a><br><p>A quiz to test your M*A*S*H knowledge.</p>");
	});

	//Load Stackoverflow Top Answerers App in window when link clicked
	$("#projectFiveInternal").on("click", function() {
		projectLoad();

		$("#projectLoaded").html("<object type='text/html' data='http://jkruhak.github.io/topAnswerers/index.html'></object>");
		$("#projectName").prepend("<a href='http://jkruhak.github.io/topAnswerers/index.html' target='_blank'><h3>Stackoverflow API Hack</h3></a><br><p>Get top answerers for a topic of your choice from Stackoverflow.</p>");
	});

	//Load API Hack App in window when link clicked
	$("#projectSixInternal").on("click", function() {
		projectLoad();

		$("#projectLoaded").html("<object type='text/html' data='http://jkruhak.github.io/apiHack/index.html'></object>");
		$("#projectName").prepend("<a href='http://jkruhak.github.io/apiHack/index.html' target='_blank'><h3>Weather Station API Hack</h3></a><br><p>Get weather from anywhere in the world with this Weather Station API.</p>");
	});
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
	$("#projectName").on("click", "#xMark", function() {
			
		$("#projectList").animate({
		"opacity": "show"}, 1500);

		$("#loadedProject").hide();
	});
};

//Back to Top button
var backToTopButton = function() {
	var scrollOffset = 100;
	var duration = 1000;

	$(window).scroll(function() {
		if($(this).scrollTop() > scrollOffset) {
			$(".backToTop").fadeIn(duration);
		} else {
			$(".backToTop").fadeOut(duration);
		}
	});

	$(".backToTop").on("click", function(event) {
		event.preventDefault();
		$("html, body").animate({scrollTop: 0}, duration);
		return false;
	});
};

//Navigation link scroll
var navigationLink = function() {
	$('a[href^="#"]:not([href=#])').on('click',function(event) {
	    event.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 1000, 'swing', function () {
	        window.location.hash = target;
	    });
	});
};