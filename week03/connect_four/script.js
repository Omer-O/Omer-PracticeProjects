(function() {
    var currentPlayer = "player1red";
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

    $.fn.eqAnyOf = function(arrayOfIndexes) {
        return this.filter(function(i) {
            return $.inArray(i, arrayOfIndexes) > -1;
        });
    };

    var slotsInDiagonal = [];
    for (var i = 0; i < diagonalsIndex.length; i++) {
        slotsInDiagonal[i] = $(".slot").eqAnyOf(diagonalsIndex[i]);
    }

    $(".column").on("click", function(e) {
        e.stopPropagation();
        var slotsInColumn = $(e.currentTarget).find(".slot");
        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInColumn.eq(i).hasClass("player1red") &&
                !slotsInColumn.eq(i).hasClass("player2green")
            ) {
                slotsInColumn.eq(i).addClass(currentPlayer);
                break;
            }
        }
        // gone thru hole loop without breake = column is full if is the row5
        if (i == -1) {
            return;
        }
        var slotsInRow = $(".column").find(".row" + i);

        if (checkForVictory(slotsInColumn) || checkForVictory(slotsInRow)) {
            victory(currentPlayer);
        }
        // check all diagonal slots
        for (var k = 0; k < slotsInDiagonal.length; k++) {
            if (checkForVictory(slotsInDiagonal[k])) {
                victory(currentPlayer);
                break;
            }
        }
        switchPlayers();
    });

    function switchPlayers() {
        if (currentPlayer == "player1red") {
            currentPlayer = "player2green";
        } else if (currentPlayer == "player2green") {
            currentPlayer = "player1red";
        }
    }

    function checkForVictory(slots) {
        var count = 0;
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                count++;
                if (count == 4) {
                    return true;
                }
            } else {
                count = 0;
            }
        }
    }

    function victory(player) {
        $("#overlay").addClass("on");
        $("#modal_container").addClass("on");
        $("#modal_container").css({
            background: player.replace(/player[\d]/g, "") // remove player1/2 text and leave just color from the player name
        });
        setTimeout(function() {
            $("#message").addClass("on");
        }, 2500);
    }

    $("#modal_container").on("click", function(e) {
        e.stopPropagation();
        $("#modal_container").removeClass("on");
        location.reload(true);
    });
})();
