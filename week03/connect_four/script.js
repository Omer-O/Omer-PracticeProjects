// (function() {
const diagonalsIndex = [
    [0, 7, 14, 21, 28, 35],
    [1, 8, 15, 22, 29],
    [2, 9, 16, 23],
    [6, 13, 20, 27, 34, 41],
    [12, 19, 26, 33, 40],
    [18, 25, 32, 39],
    [18, 13, 8, 3],
    [24, 19, 14, 9, 4],
    [30, 25, 20, 15, 10, 5],
    [36, 31, 26, 21, 16, 11],
    [37, 32, 27, 22, 17],
    [38, 33, 28, 23]
];

var currentPlayer = "player1";

// ----------- ISSUE here, how to convert the array above with diagonals indexes
//             into seriers of slots which could be passed to checkForVictory function?
var slotsInDiagonal = [];
var allSlots = $(".slot");
console.log("initial value of slotsInDiagonal: ", slotsInDiagonal);
for (var i = 0; i < diagonalsIndex.length; i++) {
    slotsInDiagonal[i] = $([]); //en empty jQuery object?
    for (var j = 0; j < diagonalsIndex[i].length; j++) {
        slotsInDiagonal[i].add(allSlots.eq(diagonalsIndex[i][j]));
    }
}
// console.log("slotsInDiagonal : ", slotsInDiagonal);

$(".column").on("click", function(e) {
    var slotsInColumn = $(e.currentTarget).find(".slot");
    for (var i = 5; i >= 0; i--) {
        if (
            !slotsInColumn.eq(i).hasClass("player1") &&
            !slotsInColumn.eq(i).hasClass("player2")
        ) {
            slotsInColumn.eq(i).addClass(currentPlayer);
            break;
        }
    }
    // gone thru hole loop without breake = column is full
    // i is the row5
    if (i == -1) {
        return;
    }
    var slotsInRow = $(".column").find(".row" + i);

    console.log("slots in row: ", slotsInRow);
    console.log("slots in column: ", slotsInColumn);
    console.log("slots in diagonal: ", slotsInDiagonal);

    // check diagonal slots
    var fourInDiagonal = false;
    for (var k = 0; k < slotsInDiagonal.length; k++) {
        fourInDiagonal = checkForVictory(slotsInDiagonal[k]);
    }

    if (
        fourInDiagonal ||
        checkForVictory(slotsInColumn) ||
        checkForVictory(slotsInRow)
    ) {
        victory(currentPlayer);
    }
    switchPlayers();
});

function switchPlayers() {
    if (currentPlayer == "player1") {
        currentPlayer = "player2";
    } else if (currentPlayer == "player2") {
        currentPlayer = "player1";
    }
}

function checkForVictory(slots) {
    var count = 0;
    console.log("number of slots to check: ", slots.length);
    for (var i = 0; i < slots.length; i++) {
        if (slots.eq(i).hasClass(currentPlayer)) {
            count++;
            console.log("counter: ", count);
            if (count == 4) {
                return true;
            }
        } else {
            count = 0;
        }
    }
}

function victory(player) {
    console.log("Victory!, the winer is ", player);
    // add message and animation
    // restart the game - location.reload
    // currentPlayer = player1
}
// })();
