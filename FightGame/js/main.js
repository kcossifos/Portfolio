    console.log("FIGHT!!!");

    // Player Names, Damage, and Health
    var players = [{
     name: 'Sailor Moon',
     damage: 20,
     health: 100
    },
    {name: 'Sailor Mars',
     damage: 20,
     health: 100
    },
    {name: 'Goku',
     damage: 20,
     health: 100
    },
    {name: 'Vegeta',
     damage: 20,
     health: 100}];

    // number of rounds
    var round = 0;

    var user = prompt("Goku vs Vegeta, or Sailor Moon vs Sailor Mars? (GV or MM)");

if(user === 'MM'|| user === "Sailor Moon vs Sailor Mars" ) {
    // displays the players name and health
    document.querySelector("#health").innerHTML = players[0].health;
    document.querySelector("#health2").innerHTML = players[1].health;
    document.querySelector("#startfight").innerHTML = players[0].name;
    document.querySelector("#startfight2").innerHTML = players[1].name;

    //button to start the fight function
    var btn = document.querySelector("#fight_btn");
    btn.addEventListener("click", fight, false);


    //function to start the fight
    function fight() {


        var minDamaOne = players[0].damage * .5;
        var minDamaTwo = players[1].damage * .5;

        var p1 = Math.floor(Math.random() * (players[0].damage - minDamaOne) + minDamaOne);
        var p2 = Math.floor(Math.random() * (players[1].damage - minDamaTwo) + minDamaTwo);

        players[0].health -= p1;
        players[1].health -= p2;


        var results = winnerCheck();
        console.log(results);

        //if it is a tie
        if (results === "No Winner") {

            round++;
            document.querySelector("#health").innerHTML = players[0].health;
            document.querySelector("#health2").innerHTML = players[1].health;
            document.querySelector("#result").defaultValue = "Round " + round;
        }
        else {
            document.querySelector("#health").innerHTML = players[0].health;
            document.querySelector("#health2").innerHTML = players[1].health;
            document.querySelector("#result").defaultValue = results;
            var x = document.querySelector(".buttonblue");
            btn.removeEventListener("click", fight, false);
            x.innerHTML = 'DONE!!';
        }
    };

    //checks for the winner
    function winnerCheck() {

        var result = "No Winner";
        if (players[0].health < 1 && players[1].health < 1) {
            result = " It\'s a tie!";
        }
        else if (players[0].health < 1) {
            result = players[1].name + " is the winner!";
        }

        else if (players[1].health < 1) {
            result = players[0].name + " is the winner!";

        }
        return result;
    };
}
else if (user === 'GV'|| user === "Goku vs Vegeta")
{
    // displays the players name and health
    document.querySelector("#health").innerHTML = players[2].health;
    document.querySelector("#health2").innerHTML = players[3].health;
    document.querySelector("#startfight").innerHTML = players[2].name;
    document.querySelector("#startfight2").innerHTML = players[3].name;

    //button to start the fight function
    var btn = document.querySelector("#fight_btn");
    btn.addEventListener("click", dragonBall, false);


    //function to start the fight
    function dragonBall() {


        var minDamaOne = players[2].damage * .5;
        var minDamaTwo = players[3].damage * .5;

        var p1 = Math.floor(Math.random() * (players[2].damage - minDamaOne) + minDamaOne);
        var p2 = Math.floor(Math.random() * (players[3].damage - minDamaTwo) + minDamaTwo);

        players[2].health -= p1;
        players[3].health -= p2;


        var results = checkWinner();
        console.log(results);

        //if it is a tie
        if (results === "No Winner") {

            round++;
            document.querySelector("#health").innerHTML = players[2].health;
            document.querySelector("#health2").innerHTML = players[3].health;
            document.querySelector("#result").defaultValue = "Round " + round;
        }
        else {
            document.querySelector("#health").innerHTML = players[2].health;
            document.querySelector("#health2").innerHTML = players[3].health;
            document.querySelector("#result").defaultValue = results;
            var x = document.querySelector(".buttonblue");
            btn.removeEventListener("click", dragonBall, false);
            x.innerHTML = 'DONE!!';
        }
    };

    //checks for the winner
    function checkWinner() {

        var result = "No Winner";
        if (players[2].health < 1 && players[3].health < 1) {
            result = " It\'s a tie!";
        }
        else if (players[2].health < 1) {
            result = players[3].name + " is the winner !";
        }

        else if (players[3].health < 1) {
            result = players[2].name + " is the winner!";

        }
        return result;
    };
}