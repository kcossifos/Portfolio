$(document).ready(function() {

	//when the form changes
	$('#mapForm').change(function(){

		//create variable to hold selected
		var selectedal = $('#mapForm option:selected').val();

		//if ALL is selected show dots
		if(selectedal == "ALL"){

			// show the dots
			$("a.dot").slideDown(1000);

		}else {

			//show the dots that are selected
			//hide the others
			$('a.dot[alcohol = "' + selectedal + '"]').slideDown(1000);
			$('a.dot[alcohol != "' + selectedal + '"]').slideUp(1000);
		}
	})

	//dot code
	//when a dot is clicked 
	$('a.dot').click(function(){

		//remove selected class from all dots
		$('a.dot').removeClass('selected');

		//add selected class on the clicked anchor
		$(this).addClass("selected");

		//Create a variable to hold the path of the matching div
		var al = ".al_detail#" +$(this).attr("al");

		//variable to hold the html code
		var htmlCode = $(al).html();

		//animate the container = fade in and out
		$(".detail_container").fadeOut(500, function(){

			//the container is hidden
			//put html in the container and then fade it back in
			$(".detail_container .al_detail").html(htmlCode);
			$(".detail_container").fadeIn(500);
		})
	})

});
