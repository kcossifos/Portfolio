# Madlib
## Descripition 
This application is a simple representation of using if and else statments in Python.


## Getting Started
```
First make sure you have some kind of code editior installed on your computer
If not, I recommed installing Atom at https://atom.io
Now clone this repository to get started by typing git clone https://github.com/kcossifos/Portfolio.git
```

## Working with Python
The following directives that are used in this application


**int** an interger value is to be returned

**raw_input** doesn't convert the input and takes the input as it is given

```
bday = int(raw_input('What year were you born? '))
age = int(raw_input('How old are you? '))
```

**class** is a way to take a grouping of functions and data and place them inside a container so you can access them with the . (dot) operator

**__init__** is roughly what represents a constructor in Python

**self** represents the instance of the object itself

**elif** represents else if

**retun** returns the data

```
def numberAge(a):
    if a <= 0:
        info = "and I do not exist."
    elif a >= 1 and a <= 11:
        info = "and I am still a kid."
    elif a >= 12 and a <= 19:
        info = "and I am a teenager."
    elif a >= 20 and a <= 29:
        info = "and I am a young adult."
    elif a >= 30 and a <= 59:
        info = "and I am just old now."
    elif a >= 60 and a <= 79:
        info = "and I am probably a grandpa/grandma by now, if not I am just lonely."
    elif a >= 80 and a <= 110:
        info = "and I am lucky to still be kicking."
    else:
        info = "and I am a ghost."
    return info
    
```
**print** outputs data

```
 print(numberAge(age))
```


For more information go to [Python](https://www.python.org)




