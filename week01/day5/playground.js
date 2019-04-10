var n = new Number(10);

console.log(typeof n); //objedt, wrap around Number
var nn = Number(10); // without new
console.log(nn);
//useful for conversion

console.log(nn.constructor.prototype);

// Actor.prototype = Object.create(Person.prototyp); //enhiritage

//call method
function fn(punctuation) {
    console.log(this.name + punctuation);
}

fn.call({ name: "funky chicken" }, "!");
//-----

function fn() {
    return [].slice.call(arguments);
}

console.log(fn(2, 4, 6));

//---------------

function Actor(n, a, o) {
    Person.call(this, n, a);
    this.oscars = o;
}

function Person(n, a) {
    this.age = a;
    this.name = n;
    this.hasHair = true;
}

Person.prototype.sleep = function() {
    console.log("zzzzzz");
};

Actor.prototype = Object.create(Person.prototype);
Actor.prototype.constructor = Actor;

Actor.prototype.act = function() {
    console.log("To be or not to be, that is the question!");
};

Actor.prototype.acceptOscar = function() {
    console.log("I promised myself I wasn't going to cry");
};

var leo = new Actor("Leonardo", 44, 1);

var jlaw = new Actor("Jennifer", 29, 1);

var joeSchmo = new Person("Joe", 56);

leo.sleep();

console.log(leo.hasHair);

//--------
// this
//call - this should be inside th function
