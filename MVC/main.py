class Controller(object):
    def __init__(self):
        print "Controller created"
        self.model = Model() #connection between controller and model
        self.view = View() #connection between controller and view
        dt = self.model.get_data() #catches the returned data
        self.view.set_data(dt)
        self.view.display_data()


class Model(object):
    def __init__(self):
        print "Model Created"
        #data held within a dictionary
        self.data = {"make": "Toyota", "model": "Camry", "price": 22000}
    def get_data(self):
        return self.data

class View(object):
    def __init__(self):
        print "View Created"
        self.data = 0
    def set_data(self, dt):
        self.data = dt #sets data in view equal to dt
    def display_data(self):
        print self.data

c = Controller()

#What are the three terms so far that we have been exposed to in class?
#Poly
#Inhertiance
#Composition / Aggregation
#Encapsulation - information hiding

#ENCAPSULATION
#Using local variables. Proper use of encapsulation will avoid
#naming collisions with your variables

class Atm(object):
    def __init__(self):
        print "ATM created"
        self.beer = "Beer"
        self.id = 1234
        self.__balance = 1000 #Public Attribute - Can be accessed outside class definition
    def get_balance(self):
        if self.id == 1234:
            return self.__balance
        else:
            return "Access Denied!"
    def set_balance(self,value):
        if self.id == 1234 and value > 0:
            self.__balance = value
            return "Balance set"
        else:
            return "Greater than 0"

a = Atm()
print a.beer
a.__balance = 10 #WRONG OOP
a.set_balance(15) #CORRECT OOP
print a.get_balance()

# utlizing mvc somehow create a senerio to demonstrate encapsulation
#have a getter and setter