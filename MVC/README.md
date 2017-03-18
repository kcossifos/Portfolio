# MVC
## Descripition 
This application is a simple representation of MVC in one file in Python.


## Getting Started
```
First make sure you have some kind of code editior installed on your computer
If not, I recommed installing Atom at https://atom.io
Now clone this repository to get started by typing git clone https://github.com/kcossifos/Portfolio.git
```

## Working with Python
The following directives that are used in this application

**class** is a way to take a grouping of functions and data and place them inside a container so you can access them with the . (dot) operator

**__init__** is roughly what represents a constructor in Python

**self** represents the instance of the object itself

```
class Controller(object):
    def __init__(self):
        print "Controller created"
        self.model = Model() #connection between controller and model
        self.view = View() #connection between controller and view
        dt = self.model.get_data() #catches the returned data
        self.view.set_data(dt)
        self.view.display_data()

```


For more information go to [Python](https://www.python.org)




