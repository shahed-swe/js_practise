var name = "Shahed";

function first() {
    var welcome = "Hello ";
    second();
    console.log(welcome + name);
}

function second() {
    var welcome2 = "Hi! ";
    third();
    console.log(welcome2 + name);
}

function third() {
    var welcome3 = "Hey! ";
    console.log(welcome3 + name);
}
first();