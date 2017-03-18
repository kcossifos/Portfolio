class Bird(object):
    def __init__(self):
        print "Bird created"
        self.wings = True
        self.name = "Jerry"
        self.food = "Worms"
    def fly(self):
        return "My name is " + self.name + " and I'am flying"
    def eat(self):
        return "I am eating " + self.food

class Duck(Bird):
    def __init__(self):
        print "Duck created"
        super(Duck, self).__init__()
        self.bill = True
        self.web_feet = True
    def swim(self):
        return self.name + " is swimming"


class Penguin(Bird):
    def __init__(self):
        super(Penguin, self).__init__()
        self.pole = "North Pole"
    def fish(self):
        return self.name + " is fishing in the " + self.pole
    def fly(self):
        return self.name + " Penguin flying"

class SuperDodo(Bird):
    def __init__(self):
        print "Dodo created"
        super(SuperDodo, self).__init__()
    def fly(self):
        return super(SuperDodo, self).fly() + " and I am pooping backwards"

d = Duck()
p = Penguin()
sd = SuperDodo()
d.name = "Daffy"
p.name = "Rico"
sd.name = "Scott"

print d.fly()
print d.eat()
print p.fish()
print p.fly()
print sd.fly()


