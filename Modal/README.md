# Modal

## Descripition
A simple modal application that uses nothing but jQuery, HTML, and CSS. To view this application go to [Modal](https://kcossifos.github.io/Portfolio/Modal/index.html)

## Getting Started
```
First make sure you have some kind of code editior installed on your computer
If not, I recommed installing Atom at https://atom.io
Now clone this repository to get started by typing git clone https://github.com/kcossifos/Portfolio.git

```

## jQuery
jQuery is a fast, small, and feature-rich JavaScript library. To get more information and to download it go to [jQuery](http://jquery.com)


## jQuery Methods
Methods that were used in this application  

**.css()** allows you to edit the css of that element  

```
$("p").css({"color": "red", "font-size" : "18px", "margin-top": "-5px"});
```

**.text()** can be used in both XML and HTML documents. This method is a string containing the combined text of all matched elements  

```
$("p").text("Congrats You've Signed Up!");
```

**.click()** binds an event handler to the "click" JavaScript event, or trigger that event on an element  
**event.preventDefault()** is used to determine if this method has been called by an event handler that was triggered by this event  
**.fadeIn()** displays the matched elements by fading them to opaque  
**.find()** gets the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element  
**.show()** displays the matched elements   

```
$('#info').click( function(event){
      event.preventDefault();
      $("#mid").fadeIn(2000).find('#term').show(1500);
  });
```
**.fadeOut()** hides the matched elements by fading them to transparent  
**.hide()** hides the matched element  

```
$("#close").click(function(event){
      event.preventDefault();
      $('#mid').fadeOut(3000).find('#term').hide(2000);
  });
```


**.mouseenter()** binds an event handler to be fired when the mouse enters an element, or trigger that handler on an element  


```
 $("#last").mouseenter(function() {
     $(".mone").css("background-color", "gray");
 });
```   
 
 **.mouseleave()** binds an event handler to be fired when the mouse leaves an element, or trigger that handler on an element  
 
 
 ```
$("#last").mouseleave(function() {
    $(".mone").css("background-color", "white");
 });
 ```  
 
 
**.toggle()** binds two or more handlers to the matched elements, to be executed on alternate clicks  


```
$( "#last" ).click(function() {
      $( "p" ).toggle();
 });
```   


**.filter()** reduces the set of matched elements to those that match the selector or pass the function's test   
**.end()**  end the most recent filtering operation in the current chain and return the set of matched elements to its previous state    
**.hover()** binds two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements  
**.toggleClass()** adds or removes one or more classes from each element in the set of matched elements    
**.next()** gets the immediately following sibling of each element in the set of matched elements    
**.slideDown()** displays the matched element with a sliding down motion   


```
$( "tr" ).filter( ":odd" ).hide().end().filter( ":even" ).hover(function() {
    $( this ).toggleClass( "active" ).next().slideDown();
});
```

