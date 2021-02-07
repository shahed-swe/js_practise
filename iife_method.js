(function take_over() {
    console.log("Hello world");
})();
// 
var sum = (function() {
    return 10 + 20;
}())

console.log(sum);
// another example

var controller = (function() {
    var user1 = {
        name: 'Md Shahed Talukder',
        age: 21,
    }
    return user1;
}())

console.log(controller)