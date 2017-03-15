# To Do List

# Descripition
A simple to do list application that allows the user to add a task, select a date, and removed the task once finished. When the task is marked as finished it then automatically moved to the finished tasks section. This application uses jQuery-UI, HTML, and CSS. To view this application go to [To Do List](https://kcossifos.github.io/Portfolio/ToDo/index.html)

## Getting Started
```
First make sure you have some kind of code editior installed on your computer
If not, I recommed installing Atom at https://atom.io
Now clone this repository to get started by typing git clone https://github.com/kcossifos/Portfolio.git

```

## jQuery-UI
jQuery UI is a curated set of user interface interactions, effects, widgets, and themes built on top of the jQuery JavaScript Library. It allows the user to pick their own theme and to customize that theme as needed. To get more information and to download it go to [jQuery-UI](https://jqueryui.com)



## Using jQuery-UI

#### Date Picker

**datepicker()** is tied to a standard form input field  

HTML File:
```
<p>
  <label for="due">Due Date: </label>
  <input type="text" name="due" id="due">
</p>
```                

jQuery File:
```
$('#due').datepicker();

```

#### Button
**button()** enchances standard form elements

HTML File:
```
<button id="add">Add a todo item</button>
```

jQuery File:
```
$('#add').button({
      icons: {
          primary: "ui-icon-circle-plus"
      }
```


