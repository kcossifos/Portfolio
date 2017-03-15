# Battleship

## Descripition 
This application is a battleship game where the board is 7 spaces long (zero counts as a space) and a ship is 3 spaces long. The user can pick a number between 0-6 and try to hit the ship. If the user hits the ship, they are alerted. They have to "hit" all three spaces occupied by the ship to "SINK" the battleship. Once the ship is sunk, they win and are alerted to how many guesses it took to sink the battleship. To view this application go to [Battleship](https://kcossifos.github.io/Portfolio/battleship/battleship.html)

## Getting Started
```
First make sure you have some kind of code editior installed on your computer
If not, I recommed installing Atom at https://atom.io
Now clone this repository to get started by typing git clone https://github.com/kcossifos/Portfolio.git
```

## HTML DOM Element Objects
The following HTML DOM elements that are used in this application

**addEventListener()** method attaches an event handler to the specified element  
**getElementById()** method returns the element that has the ID attribute with the specified value  

HTML File:

```
<button id="battle" type="button">Start Game</button>
```


Javascript File:

```
var x = document.getElementById("battle");
x.addEventListener("click", game, false);
```


