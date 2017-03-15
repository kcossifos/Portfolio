# Florida CanvasJS

## Descripition 
This application informs a user about the state of Florida and the top five cities in the state. The information is displayed by using a bar graph and clickable icons. The following coding languages were used to build this application CanvasJS, jQuery, CSS, and HTML with a foundation frameowkr. In additon, this application has music playing in the background. To view this application go to [FloridaCanvasJS](https://kcossifos.github.io/Portfolio/FloridaCanvasJS/index.html)

## CanvasJS
CanvasJS is a powerful and light weight Charting Library built on top of HTML5 & JavaScript, that includes numerous amount of features. For more information and to download CanvasJS click [here](http://canvasjs.com)

## Getting Started
```
First make sure you have some kind of code editior installed on your computer
If not, I recommed installing Atom at https://atom.io
Now clone this repository to get started by typing git clone https://github.com/kcossifos/Portfolio.git
```

## Audio 
**audio** element allows audio to be played in an HTML file  
**controls** attribute adds audio controls, like play, pause, and volume  
**source** element allows specification of alternative audio files which the browser may choose from    

```
<audio controls autoplay>
  <source src="audio/naturesounds.ogg" type="audio/ogg">
  <p>If you can read this, your browser does not support the audio element.</p>
</audio>
```

## Using CanvasJS

#### Making a map interactive

```
$(document).ready(function() {

	//when the form changes
	$('#mapForm').change(function(){

		//create variable to hold selected
		var selectedCity = $('#mapForm option:selected').val();

		//if ALL is selected show dots
		if(selectedCity == "ALL"){

			// show the dots
			$("a.dot").slideDown(1000);

		}else {

			//show the dots that are selected
			//hide the others
			$('a.dot[cities = "' + selectedCity + '"]').slideDown(1000);
			$('a.dot[cities != "' + selectedCity + '"]').slideUp(1000);
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
		var city = ".city_detail#" +$(this).attr("city");

		//variable to hold the html code
		var htmlCode = $(city).html();

		//animate the container = fade in and out
		$(".detail_container").fadeOut(500, function(){

			//the container is hidden
			//put html in the container and then fade it back in
			$(".detail_container .city_detail").html(htmlCode);
			$(".detail_container").fadeIn(500);
		})
	})

});
```
