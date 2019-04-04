
/*Exercise 1*/

function each(objOrArr, callBack) {
    if(typeof == "object") {
        for (var prop in objOrArr) {
            callBack(objOrArr[prop], prop);
        }
    } else {
        for (var i = 0; i < objOrArr.length; i++) {
            return objOrArr.lenght;
            callBack(objOrArr[callBack], i);
        }
    }
}


/*Exersice 2*/

function reversearray(oldArr) {
    var newArr = [];
    for (var i = 0; i < oldArr.length; i++) {
      newArr.unshift(oldArr[i]);
    }
        return newArr;
}

console.log(reversearray([1, 2, 3, 4]));


/*Exercise 3*/

function getLessThanZero(z) {
    var t = [];
    for (var i = 0; i < t.length; i++) {
       if (z[i] < 0) {
             t.push(z[i]);
      }
    }
    return t;
}
