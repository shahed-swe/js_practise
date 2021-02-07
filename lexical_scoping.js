function parentFunction() {
    function chiledFunction() {
        console.log("hello world");
    }
    chiledFunction();
}
parentFunction();
// this is a simple example 

function summing_parent(imported) {
    var a = 10;

    function summing_child(take) {
        var b = 20;
        console.log(a + b);
        console.log("Hello " + take);
    }
    summing_child(imported);
}

summing_parent("Md Shahed Talukder");
// another example of lexical example.