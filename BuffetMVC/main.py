from library import Library
from library import Printer

class Mainhandler():
    def __init__(self):
        self.persons = []
        self.total = int(raw_input("How much was the buffet per a person? "))
        self.party = int(raw_input("How many people are in your party? "))
        self.serve = int(raw_input("How much did you tip your server? "))
        self.buffet = Library(self.total, self.party, self.serve)
        self.persons.append(self.buffet)
        Printer(self.persons)

Mainhandler()