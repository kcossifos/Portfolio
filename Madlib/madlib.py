#prompts to ask the user questions
person = raw_input('What is your name? ')
bday = int(raw_input('What year were you born? '))
age = int(raw_input('How old are you? '))
truth = raw_input('Is that really your age? ')


print 'My name is ', person
print 'and I was born in the year', bday
print 'I am ', age, 'years old.'

#conditional that tests if the user is telling the truth about their age
if truth == "yes":
    print 'I am telling the truth about my age'
else:
    print 'I am lying about my age. '
    truth = int(raw_input('My real age is '))
    age = truth

#function that returns a value based on the age of the person
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

print(numberAge(age))

#a loop that runs through an array and prints out the age of the person's siblings
sib = [20,7,2]
num = 1
for i in sib:
    print 'My ', num ,' sibiling is', i, 'years old.'
    num+=1