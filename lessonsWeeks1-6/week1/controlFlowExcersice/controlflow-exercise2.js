//Exercise 2:

// Then create a new empty object b and use a for..in loop to iterate over all of a's properties. Give b properties whose names are the values from a and whose values are the property names from a.

var a = {
  Berlin: "Germany",
  Paris: "France",
  "New York": "USA"
};

var b = {};

for (var prop in a) {
  console.log(a[prop] + ":" + prop);
}

console.log(b);
