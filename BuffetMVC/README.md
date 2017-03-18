# Buffet MVC
## Descripition 
This application is a simple representation of MVC across multiple files in Python.


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

**int** an interger value is to be returned

**raw_input** doesn't convert the input and takes the input as it is given

```
class Mainhandler():
    def __init__(self):
        self.persons = []
        self.total = int(raw_input("How much was the buffet per a person? "))
        self.party = int(raw_input("How many people are in your party? "))
        self.serve = int(raw_input("How much did you tip your server? "))
        self.buffet = Library(self.total, self.party, self.serve)
```

**print** outputs data

```
 print "The total of your bill was $" + str(buffet[0].prices())
```


For more information go to [Python](https://www.python.org)




