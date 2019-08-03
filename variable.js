let name = "Heisenberg"; // string data type
let age = 45; // number data type

console.log(name);
console.log(age);

//concatenation
console.log('My name is ' + name + ' and I am ' + age);

//template string
console.log(`My name is ${name} and I am ${age}`); //use backticks instead of quotes

/* let option = true; // boolean data type i.e. true or false
let height; // undefined data type
console.log(height); */  // <-- this line writes undefined to the log since no value is specified

let shop = ['boots', 'shorts', 'jersey', 'pads'];
console.log(shop);
console.log(shop.sort()); 
shop.push('ball'); // add an item to the end of the shop list
shop[5] = 'gloves'; //another way of adding
shop.unshift('kit'); // add an item to the begining of the shop list
console.log(shop); // show the new list in console

shop.pop(); // remove the last item from the array
console.log(shop);

console.log(Array.isArray(shop)); // checks if it's an array; returns true or false
console.log(shop.indexOf('boots')); // return index of given value
