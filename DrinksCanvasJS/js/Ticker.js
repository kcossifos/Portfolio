var canvas2 = document.getElementById('canvas2');
				if (canvas2) {
					var ctx = canvas2.getContext("2d");
					if(ctx){

						ctx.strokeStyle = "black";
						ctx.fillStyle = "#DFDFDF";
						ctx.lineWidth = 2;
						ctx.fillRect(0, 0, 450, 100);
						ctx.strokeRect(0, 0, 450, 100);
					}
						if (ctx) {
						ctx.strokeStyle ="black";
						ctx.fillStyle = "#2B2B2B";
						ctx.lineWidth = 2;

						ctx.beginPath();

						
					

						var degrees = 360;
						var radians = (Math.PI/ 180)*degrees;
						ctx.beginPath();
						ctx.arc(50, 50, 20, 0, radians);
						ctx.fill();
						ctx.stroke();
					}
					if (ctx) {
						ctx.font = "30px Arial";
						ctx.fillText("Information on Alcohol",100,60);
					}
				}

window.onload = function(){

	//first we will get our canvas and create a stage
	var canvas = document.getElementById('canvas1');
	var stage = new createjs.Stage(canvas);

	var rect1 = new createjs.Shape();

	rect1.graphics.beginFill("black").drawRect(0,0,200,200);

	//change its registration point
	rect1.regX = 10;
	rect1.regY = 10;

	rect1.x = 200;
	rect1.y = 200;

	//add stages display list
	stage.addChild(rect1);

	createjs.Ticker.setFPS(30);

	createjs.Ticker.addEventListener("tick", tick);

	function tick(){
		rect1.rotation += 3;
		
		stage.update();
	}

	
}