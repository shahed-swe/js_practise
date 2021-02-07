// this concept is kind of simmilar with lexical scopping but here parent child basically don't call his child function it returns it's insider function.
function summing_parent() {
    function summing_child() {
        console.log("Hello World");
    }
    return summing_child;
}

var insider = summing_parent();
insider();
// 

function subtracting(take) {
    function insiders(a, b) {
        if (take == "-") {
            console.log("Subtraction is:" + (a - b));
        } else {
            console.log("This is not commamorate.")
        }
    }
    return insiders;
}
var minus = subtracting("+");
minus(23, 56);
// this is just a simple example
subtracting("-")(56, 15); //this is another function calling method of a closure