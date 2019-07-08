//the wining is to check if we got the row/column/diagmal winning - for the same color
// after winning we show a massage that the player have won.
// this massage needs to also restart the game.
//need to keep in mind that everything needs to be reset in the end.

//Animation must be in the game - does not matter were.

//$('column').eq(0).children(); //column number 1
    //easy to use 'click' - for colummn selection
    //#k1 keep track
    //#2 column selection
    //#3 switch players.
    //#loop through slots i
(function() {
console.log('hey');

        var current = 'player1';
        var column = $('.column');
        var allSlots = $('.slot');
        var diagonalVictory = [
           [allSlots.eq(0), allSlots.eq(7), allSlots.eq(14), allSlots.eq(21)],
           [allSlots.eq(1), allSlots.eq(8), allSlots.eq(15), allSlots.eq(22)],
           [allSlots.eq(2), allSlots.eq(9), allSlots.eq(16), allSlots.eq(23)],
           [allSlots.eq(6), allSlots.eq(13), allSlots.eq(20), allSlots.eq(27)],
           [allSlots.eq(7), allSlots.eq(14), allSlots.eq(21), allSlots.eq(28)],
           [allSlots.eq(8), allSlots.eq(15), allSlots.eq(22), allSlots.eq(29)],
           [allSlots.eq(12), allSlots.eq(19), allSlots.eq(26), allSlots.eq(33)],
           [allSlots.eq(13), allSlots.eq(20), allSlots.eq(27), allSlots.eq(34)],
           [allSlots.eq(14), allSlots.eq(21), allSlots.eq(28), allSlots.eq(35)],
           [allSlots.eq(18), allSlots.eq(25), allSlots.eq(32), allSlots.eq(39)],
           [allSlots.eq(18), allSlots.eq(13), allSlots.eq(8), allSlots.eq(3)],
           [allSlots.eq(19), allSlots.eq(26), allSlots.eq(33), allSlots.eq(40)],
           [allSlots.eq(19), allSlots.eq(14), allSlots.eq(9), allSlots.eq(4)],
           [allSlots.eq(20), allSlots.eq(27), allSlots.eq(34), allSlots.eq(41)],
           [allSlots.eq(20), allSlots.eq(15), allSlots.eq(10), allSlots.eq(5)],
           [allSlots.eq(24), allSlots.eq(19), allSlots.eq(14), allSlots.eq(9)],
           [allSlots.eq(25), allSlots.eq(20), allSlots.eq(15), allSlots.eq(10)],
           [allSlots.eq(26), allSlots.eq(21), allSlots.eq(16), allSlots.eq(11)],
           [allSlots.eq(30), allSlots.eq(25), allSlots.eq(20), allSlots.eq(15)],
           [allSlots.eq(31), allSlots.eq(26), allSlots.eq(21), allSlots.eq(16)],
           [allSlots.eq(32), allSlots.eq(27), allSlots.eq(22), allSlots.eq(17)],
           [allSlots.eq(36), allSlots.eq(31), allSlots.eq(26), allSlots.eq(21)],
           [allSlots.eq(37), allSlots.eq(32), allSlots.eq(27), allSlots.eq(22)],
           [allSlots.eq(38), allSlots.eq(33), allSlots.eq(28), allSlots.eq(23)]
       ];

//write name function:

        column.on('click', function(e) {//get the columns
            var slotsInColumn = $(e.currentTarget).find('.slot');
            for (var i = 5; i >= 0; i--) {//loop through to detact where is the empty slot and if we got a winner.
                if (
                    !slotsInColumn.eq(i).hasClass('player1')
                    &&
                    !slotsInColumn.eq(i).hasClass('player2')
                ) {
                    slotsInColumn.eq(i).addClass(current);
                    break;
                }
            }
            if ( i == -1 ) {
                return;
            }
//check for the victory in column:
            if (checkForWin(slotsInColumn)) {
                console.log('column winner');
                victory();
            } else {
//check for the victory in row:
                if (checkForWin($('.column').find('.row' + i))) {
                    console.log('row winner');
                    victory();
                } else {
//check for the victory in Diagonal:
                        if (checkForDiagonalWin(diagonalVictory[i])) {
                            console.log('Diagonal winner');
                            victory();
                        }
                    }
                 }
             switchPlayer();
          });





//victory check function:
        function checkForWin(allSlots) {
            var count = 0;
            for (var i =0; i < allSlots.length; i++) {
                if (allSlots.eq(i).hasClass(current)) {
                    count++;
                    console.log(count);
                    } else {
                        count = 0;
                    }
                    if (count == 4) {
                    console.log('You rule');
                    return true;
                    }
            }
        }

//Diagonal victory check function:
        function checkForDiagonalWin() {
            var count = 0;
            for (var i = 0; i < diagonalVictory.length; i++) {
                for ( var j = 0; j < diagonalVictory[i].length; j++) {
                    if (diagonalVictory[i][j].hasClass(current)) {
                    count++;
                    } else {
                        count = 0;
                    }
                }
                if (count == 4) {
                    console.log('Diagonal rule!');
                    return true;
                // winStrike.addClass('winner')
                }
            }
        }


//keep track and switch player function:
        function switchPlayer() {
            if (current == 'player1') {
                current = 'player2';
            } else {
                current = 'player1';
            }
        }



//Restart game button:
    $('.play-again').click(function(e) {
    location.reload();
   });

//ANIMATIONS:
//Winner Animation:
    function victory() {
        $(".popup2").ready(function() {
          $(".popup2").css({
            display: 'block',
          });
          $(".slot").animate({
              width: '800px',
              height: '600px',
              opacity: 0.6
        }, 4500 );

        $('.restart').on("click", function() {
            $(".popup2").css({
                display: 'none'
            });
        });
    });
    }
//SCREEN POP:
$(".popup").ready(function() {
    function pop() {
      $(".popup").css({
        display: 'block',
      });
      $("#cover").addClass('on');
    }
      setTimeout(pop, 1000); //calling the function 1sec after page upload.
});

    $('.start').on("click", function() {
        $(".popup").css({
            display: 'none'
        });
    });

//Open screen animation:
    $(document).ready(function(){
      $('.start').click(function(){
         $("#board").fadeIn(3000);
          $("#board").css({
             display: 'flex'
           });
           $("#board").animate({  borderSpacing: -360 }, {
               step: function(now,fx) {
                 $("#board").css('-webkit-transform','rotate('+now+'deg)');
                 $("#board").css('-moz-transform','rotate('+now+'deg)');
                 $("#board").css('transform','rotate('+now+'deg)');
               },
               duration: 2000
           },'linear');
    });
});

//Color change hover board:
function backgroundColor() {
    return Math.floor(Math.random() * 256);
}

 $('#board').hover(function() {
  var r = backgroundColor();
  var g = backgroundColor();
  var b = backgroundColor();
  var aColor = "rgb(" + r + "," + g + "," + b + ")";
      $('body').css({
          'background-color': aColor
     });
  });



})();
