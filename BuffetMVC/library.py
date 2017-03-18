class Library():
    def __init__(self, t, p, s):
        self.total = t
        self.party = p
        self.serve = s
    def prices(self):
        price = self.total * self.party
        return price
    def tip(self):
        tip = self.serve + self.prices()
        return tip
    def splits(self):
        split = self.tip() / self.party
        return split


class Printer():
    def __init__(self, buffet):
        print "The total of your bill was $" + str(buffet[0].prices())
        print "The amount you tipped your server was $" + str(buffet[0].serve)
        print "The total of your bill now is $" + str(buffet[0].tip())
        print "Your check spilt equally is $" + str(buffet[0].splits())

