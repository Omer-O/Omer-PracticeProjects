var x;
var xx;

x = 42;

function timesTwo(num) {
    return num * 2;
}

xx = timesTwo(x);

var numbers = [x, xx];

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

var numbers = {};

numbers.y = xx;
