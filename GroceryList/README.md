# Grocery List

## Descripition 
A simple application that allows the user to add grocery items to their list and delete them.
This application includes the following coding languages AngularJS, CSS, and HTML. To view this application go to [GroceryList](https://kcossifos.github.io/Portfolio/GroceryList/index.html)

## Getting Started
```
First make sure you have some kind of code editior installed on your computer
If not, I recommed installing Atom at https://atom.io
Now clone this repository to get started by typing git clone https://github.com/kcossifos/Portfolio.git
```

## Directives
The following directives that are used in this application

**ng-app** flags the HTML element that AngularJS should consider to be the root element of the application which allows a developer to tell AngularJS what portion of the application should be treated as the AngularJS.

**ng-controller** attaches a controller class to the view.

**ng-repeat** instantiates a template once per item from a collection. Each template instance gets its own scope, where the given loop variable is set to the current collection item, and $index is set to the item index or key.

**ng-submit** enables binding AngularJS expressions to onsubmit events.

**ng-model** binds an input,select, textarea to a property on the scope

**ng-click** allows you to specify custom behavior when an element is clicked.

```
  <body ng-app="groceryList" ng-controller="Control">
          <h1> My Grocery List</h1>
          <div id="bord">
           <form ng-submit="listForm()">
            <label>
              Add Grocery Item: <br>
              <input type="text" ng-model="food.list">
            </label>
            <button id="saves" ng-click="increment()" type="submit">Save</button>
          </form>
          <h3> Items {{ count }} </h3> 
          <ul>
            <li ng-repeat="food in listArray track by $index"> 
              {{ food.list }}
             <button id="dbtn" ng-click="removeFood($index)">X</button>
             </li>
          </ul>
        </div>
        </body>
```

For more information on directives go to [AngularJS](https://docs.angularjs.org/tutorial)




