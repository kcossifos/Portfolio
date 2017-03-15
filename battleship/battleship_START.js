

	/********************************** BATTLESHIP! ***********************************
	The board is 7 spaces long (zero counts as a space) and a ship is 3 spaces long
	User can pick a number between 0-6 and try to hit the ship
	If the user hits the ship, they are alerted. They have to "hit" all three spaces 
	occupied by the ship to "SINK" the battleship.
	Once the ship is sunk, they win and are alerted to how many guesses it took so
	SINK THE BATTLESHIP! (ENTIRE PROGRAM IS 25-30 LINES OF CODE, NOT COUNTING COMMENTS)
	**********************************************************************************/

    var x = document.getElementById("battle");
    x.addEventListener("click", game, false);

function game() {

    //CREATE VAR's for 3 LOCATIONS ON THE BOARD
    // variables for three different locations for the ship
    var location1 = 1;
    var location2 = 2;
    var location3 = 3;


//CREATE VARIABLES FOR INITIAL GUESS, HITS, & GUESSES (TALLY SHOULD START AT 0)
    // variables for input from the user on guess, if they make a hit, and the amount of guesses they made
    var guess;
    var hits = 0;
    var guesses = 0;



//CREATE VARIABLE TO DETERMINE IF SUNK IS TRUE OR FALSE (INITIATE AS FALSE)
    var sunkShip = false;

//CREATE A WHILE LOOP THAT WILL RUN UNTIL THE SHIP IS SUNK
    // everything is contained inside the while loop
    while (sunkShip == false) {



        //PROMPT USER TO GUESS A NUMBER ON THE BOARD (0-6)
        guess = prompt("Guess a number on the board between 0-6");


        //CREATE A CONDITIONAL STATEMENT TO VALIDATE THE USER'S GUESS
        //IS THE GUESS BETWEEN 0 AND 6?
        if (guess < 0 || guess > 6) {
            alert("Enter a valid number"); // a number that is not between 0 and 6 this alert will appear


            //INSIDE OF THE ELSE STATEMENT, TALLY GUESSES FOR EACH ATTEMPT
        } else {
            guesses = guesses + 1; // adds one everytime the user makes a guess


            //USE A NESTED CONDITIONAL INSIDE OF THE ELSE STATEMENT
            //IF THE USER'S GUESS MATCHES ANY OF THE SHIPS OCCUPIED SPACES, ALERT "HIT"
            // for every guess the user inputs the loop will run and if it is any of these three location the alert HIT will appear
            if (guess == location1 || guess == location2 || guess == location3) {
                alert('HIT!');

                hits = hits + 1;


                //TALLY HITS BY ADDING ONE EACH TIME THE LOOP RUNS
                if (hits == 3) {

                    sunkShip = true;
                    alert('Battleship has sunken!'); // alert when the user inputs a number that hits a ship
                }


                //CONDITION - IF USER REACHES 3 HITS, THEN THE SHIP IS SUNK
            } else {
                alert('MISS'); // alert if the user inputs a number that misses the ship
            }
        }
    }

    //ELSE ALERT MISS!


//CREATE VAR AND ALERT FOR STATS (YOU TOOK ? GUESSES TO SINK THE BATTLESHIP)
    var stats = "you took " + guesses + " guesses to sink the battleship, " + "your accuracy was" + " " +(3/guesses);
    alert(stats);
}

			////////////// EXTRA CREDIT ///////////////////

// 	Try to replace location 1 with a random location
// 	USE: var randomLoc = Math.floor(Math.random() * 5); FOR YOUR FIRST VAR
