/*Exercise 1*/
function sum() {
    var sum = 0;
    for( var i = 0; i < arguments.length; i++ )
        sum += arguments[i];
    return sum;
}
sum();

/*Exercise 2*/
function waitThenRun(c){
    setTimeout (c, 1500);
}


/*Exercise 3*/
function number(num) {
    if (num <= 0 || num == NaN) {
        return ("ERROR");
   } else if (num >= 1000000) {
        return (num);
   } else {
        for(var i = 1; num <= 1000000; i++)
          num *= 10;
        return i;
    }
}
number();
