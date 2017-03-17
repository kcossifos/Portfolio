# Cupcake Store

## Descripition 
This application is a simple representation of crud in angular. The user can add a student by entering their name, degree program, and grade level. If the user wants to edit or delete the students information they can simply click on the students name. This application includes the following coding languages AngularJS, CSS, and HTML. To view how this application works go to [CupcakeStore](https://kcossifos.github.io/Portfolio/CupcakeStore/index.html)


## Getting Started
```
First make sure you have some kind of code editior installed on your computer
If not, I recommed installing Atom at https://atom.io
Now clone this repository to get started by typing git clone https://github.com/kcossifos/Portfolio.git
```

## Directives
The following directives that are used in this application

**ng-app** flags the HTML element that AngularJS should consider to be the root element of the application which allows a developer to tell AngularJS what portion of the application should be treated as the AngularJS.

**ng-view** complements the $route service by including the rendered template of the current route into the main layoutfile. Every time the current route changes, the included view changes with it according to the configuration of the $route service.

```
<body ng-app="CupcakeApp">
	<a href="#/list">Cupcakes</a>
	<a href="#/new">Add a Cupcake</a>
	<div ng-view></div>	
</body>
```

**ng-repeat** instantiates a template once per item from a collection. Each template instance gets its own scope, where the given loop variable is set to the current collection item, and $index is set to the item index or key.

```
<ul>
 	<li ng-repeat="c in cupCake track by $index">
 		<a href="#/detail/{{$index}}">
 		{{c.flavor}}
 	</li>
 </ul>	
```
**ng-submit** enables binding AngularJS expressions to onsubmit events.

**ng-model** binds an input,select, textarea to a property on the scope.
```
<form ng-submit="saveCupCake()">
	<label>Cake Flavor: <input type="text" ng-model="cake.flavor"></input></label><br>
	<label>Frosting Flavor: <input type="text" ng-model="cake.frosting"></input></label><br>
	<label>Topping: <input type="text" ng-model="cake.topping"></input></label><br>
	<label>Decoration: <select ng-model="cake.decor">
		<option>Star</option>
		<option>Heart</option>
		<option>Swirl</option>
	</select></label><br><br>
	<button type="submit">Add Cupcake</button>
</form>
```

**ng-click** allows you to specify custom behavior when an element is clicked.
```
<button ng-click="removeCake()">Remove Cupcake</button>
```

For more information on directives go to [AngularJS](https://docs.angularjs.org/tutorial)




