function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
}

Elephant.prototype.grow = function () {
    this.height += 12;
}

Elephant.prototype.addTrick = function (trick) {
    this.tricks.push(trick);
}

Elephant.prototype.play = function () {
    console.log(
        `${this.name} is ` +
        this.tricks[Math.floor(Math.random() * (this.tricks.length))]
    );
}

function main() {
    let elephant = new Elephant("dumbo", 1000, [
        "flying",
        "doing magic tricks"
    ]);

    elephant.trumpet();
    elephant.grow();
    elephant.addTrick("having fun");
    elephant.play();
    elephant.play();
    elephant.play();
    elephant.play();
    console.log(elephant);
}

// main();


module.exports = Elephant;