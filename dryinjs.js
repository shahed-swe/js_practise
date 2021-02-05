// DRY - Don't Repeat Yourself
// that means making something reusable is DRY principle
// here we can make DRy in any thing
// we can create a class or function or something else to make something easier.
// here is an example
function summation(a, b) {
    console.log("Summation " + (a + b));
}

function subtraction(a, b) {
    console.log("Subtraction " + (a - b));
}

function multiplication(a, b) {
    console.log("Multiplication " + (a * b));
}

function division(a, b) {
    console.log("Division " + (a / b));
}
// here we are making different type of function for each operation but we can do them at a single funciton like this

function all_operation(exp, a, b) {
    if (exp == "+") {
        console.log("Summation " + (a + b));
    } else if (exp == "-") {
        console.log("Subtraction " + (a - b));
    } else if (exp == "*") {
        console.log("Multiplication " + (a * b));
    } else if (exp == "/") {
        console.log("Division " + (a / b));
    } else {
        //pass
    }
}

all_operation("+", 12, 34)
    // we are getting the same type of output and that's the DRY principle