let deck = [
    {suit: "diamonds", color: "red", value:1}, {suit: "hearts", color: "red", value:1}, {suit: "spades", color: "black", value:1}, {suit: "clubs", color: "black", value:1},
    {suit: "diamonds", color: "red", value:2}, {suit: "hearts", color: "red", value:2}, {suit: "spades", color: "black", value:2}, {suit: "clubs", color: "black", value:2},
    {suit: "diamonds", color: "red", value:3}, {suit: "hearts", color: "red", value:3}, {suit: "spades", color: "black", value:3}, {suit: "clubs", color: "black", value:3},
    {suit: "diamonds", color: "red", value:4}, {suit: "hearts", color: "red", value:4}, {suit: "spades", color: "black", value:4}, {suit: "clubs", color: "black", value:4},
    {suit: "diamonds", color: "red", value:5}, {suit: "hearts", color: "red", value:5}, {suit: "spades", color: "black", value:5}, {suit: "clubs", color: "black", value:5},
    {suit: "diamonds", color: "red", value:6}, {suit: "hearts", color: "red", value:6}, {suit: "spades", color: "black", value:6}, {suit: "clubs", color: "black", value:6},
    {suit: "diamonds", color: "red", value:7}, {suit: "hearts", color: "red", value:7}, {suit: "spades", color: "black", value:7}, {suit: "clubs", color: "black", value:7},
    {suit: "diamonds", color: "red", value:8}, {suit: "hearts", color: "red", value:8}, {suit: "spades", color: "black", value:8}, {suit: "clubs", color: "black", value:8},
    {suit: "diamonds", color: "red", value:9}, {suit: "hearts", color: "red", value:9}, {suit: "spades", color: "black", value:9}, {suit: "clubs", color: "black", value:9},
    {suit: "diamonds", color: "red", value:10}, {suit: "hearts", color: "red", value:10}, {suit: "spades", color: "black", value:10}, {suit: "clubs", color: "black", value:10},
    {suit: "diamonds", color: "red", value:11}, {suit: "hearts", color: "red", value:11}, {suit: "spades", color: "black", value:11}, {suit: "clubs", color: "black", value:11},
    {suit: "diamonds", color: "red", value:12}, {suit: "hearts", color: "red", value:12}, {suit: "spades", color: "black", value:12}, {suit: "clubs", color: "black", value:12},
]

let turned = [
    [2, 1, 1, 1, 1, 1, 1],
    [0, 2, 1, 1, 1, 1, 1],
    [0, 0, 2, 1, 1, 1, 1],
    [0, 0, 0, 2, 1, 1, 1],
    [0, 0, 0, 0, 2, 1, 1],
    [0, 0, 0, 0, 0, 2, 1],
    [0, 0, 0, 0, 0, 0, 2],
]

let sorted = []

function randValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let sortCards = () => {
    let picked = new Set();

    for (let i = 0; i < 7; i++) {
        sorted[i] = [];

        for (let j = 0; j < 7; j++) {
            if (turned[i][j] == 0) {
                let index = randValue(0, 47);

                while (picked.has(index)) {
                    index = randValue(0, 47);
                }

                sorted[i][j] = deck[index];
                picked.add(index);
            }
        }
    }

    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 7; j++) {
            if (sorted[i][j]) {
                console.log(sorted[i][j].value);
            } else {
                console.log("No card");
            }
        }
        console.log("\n");
    }
}

sortCards()

