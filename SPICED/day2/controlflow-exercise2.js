
var a = {
    Berlin: 'Germany',
    Paris: 'France',
    'New York': 'USA'
};

var b = {}

for (var prop in a) {
    console.log(a[prop] + ":" + prop);
};

console.log(b);
