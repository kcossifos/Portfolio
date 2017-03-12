app.service("cupCakeStore", function(){

 var cupArr = [{ "flavor" : "chocolate",
 				  "frosting"    : "vanilla",
 				  "decor" : "star",
 				  "topping" : "sprinkles"
				},
				
				{
				  "flavor" : "vanilla",
 				  "frosting"    : "chocolate",
 				  "decor" : "swirl",
 				  "topping" : "sprinkles"
				},

				{
				  "flavor" : "chocolate",
 				  "frosting"    : "chocolate",
 				  "decor" : "heart",
 				  "topping" : "whipcream"
				}
];

this.getCupCakes = function(){
	var getc = localStorage.getItem('cakes');
	cupArr = JSON.parse(getc) || cupArr;
	return cupArr;
}

this.getCakes = function(idx){
 return this.getCupCakes()[idx];
}

this.addCupCakes = function(cake){
	cupArr.push(cake);
	updateLS();
}

this.removeCupCakes = function(cidx){
	cupArr.splice(cidx,1);
	updateLS();
}

this.updateCupCakes = function(cake, cidx){
	cupArr.splice(cidx, 1, cake);
	updateLS();
}

function updateLS(){
   var setc = JSON.stringify(cupArr);
   localStorage.setItem('cakes', setc);
}
});