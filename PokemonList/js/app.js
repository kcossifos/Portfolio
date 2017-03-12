//Initializing the application with no dependencies
var app = angular.module("pokedex",[]);
//Setting the trainer controller as a child of pokedex
app.controller("trainer", function($scope, pokedata){
    //testing it
    $scope.test = "Gotta Catch 'Em All!"
    
    //object literal for pokemon
    $scope.pokemon = {};
    
    $scope.pokeArr = pokedata.getPokedata();
    
    //adds the pokemon to the pokedata
    $scope.onCatch = function(){
        //Send pokemon into the pokedata
        pokedata.addPokedata($scope.pokemon);
        //prepares to catch new pokemon
        $scope.pokemon = {};
    }
    
    //removes the pokedata from the pindex
    $scope.removePokedata = function(pindex){
        pokedata.removePokedata(pindex);
    }

    $scope.getColor = function(p){
      switch(p.type){
        case "Fire":
              return "#ffcccc";
              break;
        case "Water":
              return "#ccffcc";
              break;
        case "Grass":
              return "#ccccff";
              break;    
        default:
              return "#dedede";
                          
      }
    }
})

//Creating the service as a child of pokedex
app.service("pokedata", function(){
    
    //Array literal for pokemon with 3 objects corresponding to the pokemon
    var pokeArr = [{"name" : "Charmander",
                   "type" : "Fire",
                   "level" : 5
                   },
                   {"name" : "Squirtle",
                   "type" : "Water",
                   "level" : 5
                   },
                   {"name" : "Bulbasaur",
                   "type" : "Grass",
                   "level" : 5
                   }
                  ];
    
    //Gets data from local storage parses it then returns it
    this.getPokedata = function(){
        //Getting the pokedata from the local poke storage
        var pokeD = localStorage.getItem('pokedata');
        //Setting the pokeArr equal to the pokedata, after its parsed
        pokeArr = JSON.parse(pokeD) || pokeArr;
        //returning the pokeArr
        return pokeArr;
    }
    
    //Adds pokemon data and updates the storage
    this.addPokedata = function(pokemon){
        //pushes the pokemon sent from the trainer into the pokeArr
        pokeArr.push(pokemon);
        //updates the pokeStorage
        updatePS();
    }
    
    //Removes pokemon data updates the storage
    this.removePokedata = function(pidx){
        //removes one pokemon from the array, it murders it    
        pokeArr.splice(pidx,1);
        //updates the poke storage    
        updatePS();    
    }
    
    function updatePS(){
        //Setting the pokeArr to be a string
       var pokeS = JSON.stringify(pokeArr);
        //sending the pokeS into the local pokeStorage
        localStorage.setItem('pokedata', pokeS);
    }
})