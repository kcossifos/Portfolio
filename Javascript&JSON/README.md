# Javascript & JSON

## Description
This is a small application that demonstrates how Javascript, HTML, and JSON work together. To view this application go to To view this application go to [Javascript&JSON](https://kcossifos.github.io/Portfolio/Javascript&JSON/index.html)

## Getting Started
```
First make sure you have some kind of code editior installed on your computer
If not, I recommed installing Atom at https://atom.io
Now clone this repository to get started by typing git clone https://github.com/kcossifos/Portfolio.git

```
## Using JSON

**JSON.parse** parses the data so the data becomes a Javascript Object

JSON File:
```
var myAnimals = '{ "cats" : [' +
             '{ "breed" : "Siamese" , "catname" : "Loki", "age" : "one"},' +
             '{ "breed" : "Ragdoll" , "catname" : "Thor", "age" : "thirteen"} ]}';
```

Javascript File:
```
 var ja = JSON.parse(myAnimals);

    console.log("The cats breed is a " + ja.cats[0].breed + ", his name is " + ja.cats[0].catname + ", and he is "
                + ja.cats[0].age + " year old.");
    console.log("The cats breed is a " + ja.cats[1].breed + ", his name is " + ja.cats[1].catname + ", and he is "
        + ja.cats[1].age + " weeks old.");

//Displays in HTML with DOM
var catOne = document.querySelectorAll('#catone');
var catTwo = document.querySelectorAll('#cattwo');

    catOne[0].innerHTML ="The cats breed is a " + ja.cats[0].breed + ", his name is " + ja.cats[0].catname + ", and he is "
        + ja.cats[0].age + " year old.";

    catTwo[0].innerHTML = "The cats breed is a " + ja.cats[1].breed + ", his name is " + ja.cats[1].catname + ", and he is "
     
```

HTML File:
```
<div id="catone"></div>
<div id="cattwo"></div>
```
