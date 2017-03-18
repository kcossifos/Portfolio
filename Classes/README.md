# Classes
## Descripition 
This application is a simple representation of classes in Python.


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
class Penguin(Bird):
    def __init__(self):
        super(Penguin, self).__init__()
        self.pole = "North Pole"
    def fish(self):
        return self.name + " is fishing in the " + self.pole
    def fly(self):
        return self.name + " Penguin flying"
```

print p.fish()

```
 print "The total of your bill was $" + str(buffet[0].prices())
```


For more information go to [Python](https://www.python.org)




