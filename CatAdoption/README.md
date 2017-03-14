# Fuzzy Friends Adoption

## Descripition 
This application is about adopting cats from a shelter. This site allows you to filter through cats, like a cat, comment on a cats picture, and upload pictures of your own cat. The following coding languages are used for this site AngularJS, HTML, CSS and Jquery.
To view this application go to [Fuzzy Friends Adoption](https://kcossifos.github.io/Portfolio/CatAdoption/index.html)

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

```
  <div  ng-app="myApp">
  <div  ng-controller="controller">
```
**ng-model** binds an input,select, textarea to a property on the scope.

**ng-repeat** instantiates a template once per item from a collection. Each template instance gets its own scope, where the given loop variable is set to the current collection item, and $index is set to the item index or key.

```
<label>Age
	<select ng-model="pet_age">
          	<option ng-repeat="x in pets" value="{{x.age}}">{{x.age}}</option>
	</select>
</label>
```

**ng-submit** enables binding AngularJS expressions to onsubmit events.

```
<form style="margin-left: 47%;" ng-submit="uploadFile()">
	<input type="file" name="file" id="nameImg" accept="image/*"> <br/>
        <span>
		<button  type="submit">Upload Image</button>
	</span>
</form>
```

**ng-src** allows the use of a markup like {{hash}} to be used in a src attribute. Without it the browser will fetch from the URL with the literal text {{hash}} until AngularJS replaces the expression inside {{hash}}. Using ng-src directive solves this problem.

```
<img class="img" ng-src="{{img.sms}}">  
```

**ng-click** allows you to specify custom behavior when an element is clicked.
```
<button ng-click='btn_add();'>Post Comment</button>
```

For more information on directives go to [AngularJS](https://docs.angularjs.org/tutorial)




