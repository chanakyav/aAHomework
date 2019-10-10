const Elephant = require('./phase2');

Elephant.paradeHelper = function(elephant) {
    console.log(elephant.name + ' is trotting by!');
};

let ellie = new Elephant("Ellie", 185, [
	"giving human friends a ride",
	"playing hide and seek"
]);
let charlie = new Elephant("Charlie", 200, [
	"painting pictures",
	"spraying water for a slip and slide"
]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, [
	"trotting",
	"playing tic tac toe",
	"doing elephant ballet"
]);

let herd = [ellie, charlie, kate, micah];

herd.forEach(Elephant.paradeHelper);

// console.log(herd);
