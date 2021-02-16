/*basically javascrpt is an prototype based object oriented programming language. there are two types
data type in js
1. Premitive type data
2. Object type data
we can say everything is object in js without premitive types of data.cause they directly holp values
into their variables and in objects they only hold reference of the value
*/
// let's see some example
var a = 10,
    b = 20;
console.log("Beforre Swap A: " + a + " B: " + b);

function swap(a, b) {
    console.log("Before Swap A: " + a + " B: " + b);
    var temp = 0;
    temp = a;
    a = b;
    b = temp;
    console.log("After Swap A: " + a + " B: " + b);
}
swap(a, b);
console.log("After Swap A: " + a + " B: " + b);
// as we are wathing there is nothing have changed outside of the function when we used some premitive datatypes
// now let's use a object to do the same and see what happend
console.log("\n")
var obj = {
    a: 10,
    b: 20,
}
console.log("Before Swap: A: " + obj.a + " B: " + obj.b);

function swap(x) {
    console.log("Before Swap A: " + x.a + " B: " + x.b);
    var temp = 0;
    temp = x.a;
    x.a = x.b;
    x.b = temp;
    console.log("After Swap A: " + x.a + " B: " + x.b);
}
swap(obj)
console.log("After Swap A: " + obj.a + " B: " + obj.b);
// as we can see in objects the values of that objects changed permanently because we have use the 
// reference of that object and not using the value direct.
// now we will practise some code on our console
// we will just write them here for some practise
var arr = [0, 1, 5, 7, 3, 4]
console.log(arr)
console.log(arr.length)
    // for being a proto object we can access Array properties by it. also we can use __proto__ methods like that
arr.push(100, 120, 125)
console.log(arr)
    // we can see the index numbers by doing this on an array or an object
    // but this will work only on our browser cause in our node we will only see those elements only
console.dir(arr)
arr.pop()
console.log(arr)
    // now we will see the __proto__ of an array and the Array.protype is equal or not
console.log(arr.__proto__ == Array.prototype)
    // we can see both are same