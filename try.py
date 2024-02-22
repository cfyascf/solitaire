import random

deck = [
    ("diamonds", "red", 1), ("hearts", "red", 1), ("spades", "black", 1), ("clubs", "black", 1),
    ("diamonds", "red", 2), ("hearts", "red", 2), ("spades", "black", 2), ("clubs", "black", 2),
    ("diamonds", "red", 3), ("hearts", "red", 3), ("spades", "black", 3), ("clubs", "black", 3),
    ("diamonds", "red", 4), ("hearts", "red", 4), ("spades", "black", 4), ("clubs", "black", 4),
    ("diamonds", "red", 5), ("hearts", "red", 5), ("spades", "black", 5), ("clubs", "black", 5),
    ("diamonds", "red", 6), ("hearts", "red", 6), ("spades", "black", 6), ("clubs", "black", 6),
    ("diamonds", "red", 7), ("hearts", "red", 7), ("spades", "black", 7), ("clubs", "black", 7),
    ("diamonds", "red", 8), ("hearts", "red", 8), ("spades", "black", 8), ("clubs", "black", 8),
    ("diamonds", "red", 9), ("hearts", "red", 9), ("spades", "black", 9), ("clubs", "black", 9),
    ("diamonds", "red", 10), ("hearts", "red", 10), ("spades", "black", 10), ("clubs", "black", 10),
    ("diamonds", "red", 11), ("hearts", "red", 11), ("spades", "black", 11), ("clubs", "black", 11),
    ("diamonds", "red", 12), ("hearts", "red", 12), ("spades", "black", 12), ("clubs", "black", 12),
]

turned = [
    [2, 1, 1, 1, 1, 1, 1],
    [0, 2, 1, 1, 1, 1, 1],
    [0, 0, 2, 1, 1, 1, 1],
    [0, 0, 0, 2, 1, 1, 1],
    [0, 0, 0, 0, 2, 1, 1],
    [0, 0, 0, 0, 0, 2, 1],
    [0, 0, 0, 0, 0, 0, 2],
]

sorted = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]

picked = []

def sortCards():
    for i in range(7):
        for j in range(7):
            if(turned[i][j] != 0):
                index = random.randint(0, len(deck) - 1)
                while(deck[index] in picked):
                        index = random.randint(0, len(deck) - 1)

                sorted[i][j] = deck[index]
                picked.append(deck[index])

def moveCard(from_column, to_column):
    for i in range(6, 0):
        if(turned[i][from_column] != 0):
            last_card = sorted[i][from_column]
            turned[i][from_column] = 0

            if(turned[i - 1][from_column] != 2):
                 turned[i - 1][from_column] = 2

    for i in range(0, 6):
          if(turned[i][to_column] == 0):
               if(sorted[i][to_column][2] == sorted[i][from_column][2] + 1 and sorted[i][to_column][1] != sorted[i][from_column][1]):
                turned[i][to_column] = last_card

    
          
     


for i in range(7):
    print("\n")
    for j in range(7):
        print(sorted[i][j], end='')





