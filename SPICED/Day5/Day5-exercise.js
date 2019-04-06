/*Exercise 1*/

function Rectangle(w, h){
    this.width = w;
    this.height = h;
    this.getArea = function() {
        return this.width * this.height;
    };
}

function Square(s){
    Rectangle.call(this, s, s);
}

var square = new Square(4);
square.getArea();

var rect = new Rectangle(4, 5);
rect.getArea();

/*Exercise 2*/

function invertCase(s) {
    var str = '';
    for (var i = 0; i < s.length; i++) {
        var  sting = s[i];
        if ( sting == sting.toLowerCase()) {
            str += sting.toUpperCase();
        } else {
            str += sting.toLowerCase();
        }
    }
        return str;
}

var str = 'Hello GoodBye';
invertCase(str);
