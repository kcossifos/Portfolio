/**
JSON

 * JSON: JavaScript Object Notation.
 * JSON is a syntax for storing and exchanging data.
 * JSON is an easier-to-use alternative to XML.

 * JSON - Evaluates to JavaScript Objects
   The JSON format is syntactically identical to the code for creating JavaScript objects.

    Because of this similarity, instead of using a parser (like XML does), a JavaScript
    program can use standard JavaScript functions to convert JSON data into native JavaScript objects.

 * JSON Syntax Rules
 * JSON syntax is derived from JavaScript object notation syntax:

    Data is in name/value pairs
    Data is separated by commas
    Curly braces hold objects
    Square brackets hold arrays

*** JSON names require double quotes. JavaScript names don't. ***
        "firstName":"John"
              vs
        firstName: "John";

 * JSON values can be:

    A number (integer or floating point)
    A string (in double quotes)
    A Boolean (true or false)
    An array (in square brackets)
    An object (in curly braces)
    null

 * JSON objects are written inside curly braces.
        {"firstName":"John", "lastName":"Doe"}

 * JSON Arrays
 * JSON arrays are written inside square brackets.
    Just like JavaScript, a JSON array can contain multiple objects:
        "employees":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter","lastName":"Jones"}
        ]

 */


//PARSE A JSON TEXT(STRING) INTO A JAVASCRIPT OBJECT
//USE data.js object "employees"



//ACCESSING A JSON ARRAY
//Use data.js object "people"
//Use json_weather.js



//Load JSON data in the HTML using DOM



/**********   PRACTICE EXERCISES   *******************/

// 1a. Console.log the forecast for the next 3 days in sentence (String) format
// example: Today is Saturday. The high is 82. The low is 65. It will be partly cloudy.
(document.addEventListener("DOMContentLoaded", function(event){

console.log(data);
console.log("Today is " + data.results.forecast[0].day + ".");
console.log("The high is " + data.results.forecast[0].high);
console.log("The low is " + data.results.forecast[0].low);
console.log("It will be " + data.results.forecast[0].text);

console.log("Today is " + data.results.forecast[1].day + ".");
console.log("The high is " + data.results.forecast[1].high);
console.log("The low is " + data.results.forecast[1].low);
console.log("It will be " + data.results.forecast[1].text);

console.log("Today is " + data.results.forecast[2].day + ".");
console.log("The high is " + data.results.forecast[2].high);
console.log("The low is " + data.results.forecast[2].low);
console.log("It will be " + data.results.forecast[2].text);


// 1b. Display the results in the HTML page using DOM (You may need to create a place for it or use existing code)
var partOne = document.querySelectorAll('#partone');
var partTwo = document.querySelectorAll('#parttwo');
var partThree = document.querySelectorAll('#partthree');
partOne[0].innerHTML = "Today is " + data.results.forecast[0].day + "." + " The high is "
                        + data.results.forecast[0].high + "." + " The low is " + data.results.forecast[0].low
                        + "." + " It will be " + data.results.forecast[0].text + "." ;

partTwo[0].innerHTML = "Today is " + data.results.forecast[1].day + "." + " The high is "
        + data.results.forecast[1].high + "." + " The low is " + data.results.forecast[1].low
        + "." + " It will be " + data.results.forecast[1].text + "." ;

partThree[0].innerHTML = "Today is " + data.results.forecast[2].day + "." + " The high is "
        + data.results.forecast[2].high + "." + " The low is " + data.results.forecast[2].low
        + "." + " It will be " + data.results.forecast[2].text + "." ;



// 2. Console.log each of the employees showing their full names (from the object "employees"
// and jobs (from the object "people").
var ts = JSON.parse(text);
console.log(ts.employees[0].firstName + " " + ts.employees[0].lastName);
console.log(ts.employees[1].firstName + " " + ts.employees[0].lastName);
console.log(ts.employees[2].firstName + " " + ts.employees[0].lastName);

    console.log(myJSON.people[0].name + '  ' + myJSON.people[0].job);
    console.log(myJSON.people[1].name + '  ' + myJSON.people[1].job);
    console.log(myJSON.people[2].name + '  ' + myJSON.people[2].job);


// 3a. Create your own JSON object or Array and console.log the information in sentence format.
 var ja = JSON.parse(myAnimals);

    console.log("The cats breed is a " + ja.cats[0].breed + ", his name is " + ja.cats[0].catname + ", and he is "
                + ja.cats[0].age + " year old.");
    console.log("The cats breed is a " + ja.cats[1].breed + ", his name is " + ja.cats[1].catname + ", and he is "
        + ja.cats[1].age + " weeks old.");

//3b. REPEAT and display in HTML with DOM
var catOne = document.querySelectorAll('#catone');
var catTwo = document.querySelectorAll('#cattwo');

    catOne[0].innerHTML ="The cats breed is a " + ja.cats[0].breed + ", his name is " + ja.cats[0].catname + ", and he is "
        + ja.cats[0].age + " year old.";

    catTwo[0].innerHTML = "The cats breed is a " + ja.cats[1].breed + ", his name is " + ja.cats[1].catname + ", and he is "
        + ja.cats[1].age + " weeks old.";
}));