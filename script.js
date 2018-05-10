$(".nav a").on("click",function () {
	$(".nav a").removeClass("active");
	$(this).addClass("active");
})

/*
$(document).ready(function () {
	
	var scrollLink = ('.scroll');

	scrollLink.click(function (e) {
		e.preventDefault();
		$('body,html').animate({scrollTop:(this.hash).offset().top-200})
	})
})
*/


function submit() {
	conslole.log("CHECK");
	alert("Thank You for Submitting!");
}