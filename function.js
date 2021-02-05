// before starting taking about function let's talk about premetive and non-premetive data
// premetive data type contains only a single value like integer, float, double etc
// non-premetive data tpye contains many types of data into a single variable like array, objects etc.
// now let's talk about why we are discussing this before starting function
// because premetive data will pass in the parameter by value and non-premetive data will be passed by reference
// now let's start with some example
function making_sum(a, b) {
    console.log(a + b);
}
making_sum(10, 12)
    //this is an example of pass by value

function making_sum_of_element(arr) {
    var summation = 0;
    for (var i = 0; i < arr.length; i++) {
        summation += arr[i];
    }
    console.log(summation)
}

var take = [1, 2, 3, 5, 6, 7, 8, ];
making_sum_of_element(take);

// now let's make a same type example with object concept

function making_sum_of_element_with_object(obj) {
    var summation = obj.number_one + obj.number_two;
    console.log(summation);
}

elements = {
    number_one: 13,
    number_two: 24
}
making_sum_of_element_with_object(elements)
    // those are just simple example of our first concept

// we can define our function like this
var sum_now = function(a, b, c) {
    console.log(a + b + c);
}
sum_now(1, 2, 3)
    // we can call this type of function with anonymouse function...cause this functions doesn't have any name, we are just assigning
    // them into a variable
    // we can do both of them. it's tottaly our choice which one we will make on our program

// now let's talk about expression and statements
// things that produce value is an expression
// like
10 + 10