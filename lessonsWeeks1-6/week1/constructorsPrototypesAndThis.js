/*Exercise 1*/
// Write a constructor called Rectangle that accepts two numbers (width and height) as parameters. Rectangle instances should have a method called getArea that returns the instance's width multiplied by its height. Write another constructor called Square that accepts one number (which will serve as both width and the height) as a parameter. Instances of Square should also have a getArea method but you should not rewrite the getArea function you wrote for Rectangle. Square instances should use the same getArea method that Rectangle instances do.
//
// var square = new Square(4);
// square.getArea(); //16
//
// var rect = new Rectangle(4, 5);
// rect.getArea(); //20
function Rectangle(w, h) {
  this.width = w;
  this.height = h;
  this.getArea = function() {
    return this.width * this.height;
  };
}

function Square(s) {
  Rectangle.call(this, s, s);
}

var square = new Square(4);
square.getArea();

var rect = new Rectangle(4, 5);
rect.getArea();

/*Exercise 2*/
// Write a function called invertCase that expects a string as a parameter. This function should return a new string with all the same characters as the string that was passed in but with the cases of the alphabetic characters switched. Uppercase characters should become lowercase and lowercase letters should become uppercase. Characters that are not alphabetic should not change. String.prototype.toUpperCase and String.prototype.toLowerCase will come in handy here.
function invertCase(s) {
  var str = "";
  for (var i = 0; i < s.length; i++) {
    var sting = s[i];
    if (sting == sting.toLowerCase()) {
      str += sting.toUpperCase();
    } else {
      str += sting.toLowerCase();
    }
  }
  return str;
}

var str = "Hello GoodBye";
invertCase(str);
