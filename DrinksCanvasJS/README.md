# Drinks CanvasJS

## Descripition 
This application informs a user about alcohol such as the use of alcohol based on age and how alcohol differs between genders. The information is displayed by using a bar graph and clickable icons. The following coding languages were used to build this application CanvasJS, jQuery, CSS, and HTML. In additon, this application is using a foundation framework. To view this application go to [DrinksCanvasJS](https://kcossifos.github.io/Portfolio/DrinksCanvasJS/index.html)

## CanvasJS
CanvasJS is a powerful and light weight Charting Library built on top of HTML5 & JavaScript, that includes numerous amount of features. For more information and to download CanvasJS click [here](http://canvasjs.com)

## Getting Started
```
First make sure you have some kind of code editior installed on your computer
If not, I recommed installing Atom at https://atom.io
Now clone this repository to get started by typing git clone https://github.com/kcossifos/Portfolio.git
Then open up the DrinksCanvasJS file
```

## Using CanvasJS

#### Positioning Bars in Bar Graph

```
function positionBars(){
	//create a function to position each bar

	$(".chart-area .chart-bar").each(function(index){

		var barPosition = (window.barWidth * index) 
						+ (window.barSpacing * index) 
						+ window.barSpacing;

		$(this).css("left", barPosition + "px");

		//add text to the bar and x-axis
		$(this).html("<p>"+$(this).attr("bar-value") + "</p>")	

		//x-axis
		$('.chart-x-axis').append('<p style="left:' 
			+ (barPosition - (window.barWidth/2)) + 'px;">' 
			+ $(this).attr('label') + '</p>');	

		//relative height of the bars
		var barValue = Number($(this).attr("bar-value"));

		if(barValue > window.maxValue){
			window.maxValue = barValue;
			window.valueMultiplier = window.maxValue / window.highestYlabel;
		}		

	});

	animateChart();	
}

```

#### Making Bar Graph Animated

```
//create a function that will animate our chart
function animateChart(){

	//get each bar and animate it to its proper height
	$(".chart-area .chart-bar").each(function(index){

		//height relative to the chart height
		var revisedValue = Number($(this).attr("bar-value")) * window.chartScale;

		//create a variable for delay
		var newDelay = 125 * index;

		//animate the bar
		$(this).delay(newDelay).animate({height:revisedValue}, 1000, function(){
			//fade in out <o> tags
			$(this).children("p").delay(500).fadeIn(250);
		})
	})
}
```

