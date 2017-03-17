# Employee Directory

## Descripition 
This is a simple application that allows a user to add an employee to a directory with the ability of deleting that employee. This application uses AngularJS, HTML, and CSS. To view this application go to [EmployeeDirectory](https://kcossifos.github.io/Portfolio/EmployeeDirectory/index.html)

## Getting Started
```
First make sure you have some kind of code editior installed on your computer
If not, I recommed installing Atom at https://atom.io
Now clone this repository to get started by typing git clone https://github.com/kcossifos/Portfolio.git
```

## Directives
The following directives that are used in this application

**ng-app** flags the HTML element that AngularJS should consider to be the root element of the application which allows a developer to tell AngularJS what portion of the application should be treated as the AngularJS.

**ng-repeat** instantiates a template once per item from a collection. Each template instance gets its own scope, where the given loop variable is set to the current collection item, and $index is set to the item index or key.

**ng-submit** enables binding AngularJS expressions to onsubmit events.

**ng-model** binds an input,select, textarea to a property on the scope

**ng-click** allows you to specify custom behavior when an element is clicked.

**ng-controller** attaches a controller class to the view.

```
 <body ng-app="empApp" ng-controller="myController">
    <div id="wrapper">    
    <form ng-submit="empSave()">
    <div id="left"> 
    <h1>Add Employee</h1> 
        <label>Employee: <br><input type="text" ng-model="employee.name"></label><br>
        <label>Street: <br> <input type="text" ng-model="employee.street"></label><br>
        <label>City: <br><input type="text" ng-model="employee.city"></label><br>
        <label>State: <br><input type="text" ng-model="employee.state"></label><br>
        <label>Zip Code: <br> <input type="text" ng-model="employee.zipcode"></label><br>
        <button id="btn" type="submit">Add Entry</button>
       </div> 
    </form>
    <div id="right">
    <h1 id="size">Employee Directory</h1>
    <ul>

        <li ng-repeat="employee in employees track by $index"><button id="emp" ng-click="removeEmp($index)">X</button>Employee: {{employee.name}} <br> Street: {{employee.street}} <br> City: {{employee.city}}  <br>State: {{employee.state}} <br> Zipcode: {{employee.zipcode}} <br>
         </li>
    </ul>  
    </div> 
    </div> 
    </body>
```

For more information on directives go to [AngularJS](https://docs.angularjs.org/tutorial)




