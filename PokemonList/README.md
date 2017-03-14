# PokemonList

## Descripition 
Small application that allows the user to enter in a Pokemon's name, type, and level and then delete that pokemon if necessary.
This application includes the following coding languages AngularJS, CSS, and HTML. To view this application go to [PokemonList](https://kcossifos.github.io/Portfolio/PokemonList/index.html)

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

**ng-model** binds an input,select, textarea to a property on the scope.

**ng-controller** attaches a controller class to the view.

**ng-click** allows you to specify custom behavior when an element is clicked.

```
<body ng-app="pokedex" ng-controller="trainer">
    <form ng-submit="onCatch()">
        <label>
            Pokemon Name:
            <input type="text" ng-model="pokemon.name"> 
        </label>
        <label>
            Pokemon Type:
            <select ng-model="pokemon.type">
                <option>Fire</option>
                <option>Water</option>
                <option>Grass</option>
            </select>
        </label>
        <label>
            Pokemon Level:
            <input type="text" ng-model="pokemon.level"> 
        </label>
        <button type="submit">Catch It!</button>
    </form>
    <div ng-repeat="pokemon in pokeArr track by $index" style="height: 125px; width: 125px; float: left; padding: 10px; margin: 10px; border: 1px solid #cdcdcd; background: {{getColor(pokemon)}};">
        <p>{{pokemon.name}}</p>
        <p>{{pokemon.type}}</p>
        <p>{{pokemon.level}}</p>
        <button ng-click="removePokedata($index)">Set them free!</button>
    </div>
</body>
```

For more information on directives go to [AngularJS](https://docs.angularjs.org/tutorial)




