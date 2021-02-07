// in this lecture we will discuss about local and global scope or we can say local and global variables
// local variable = a variable that is declared inside of a function is called as local variable.
// cause we can't call them outside of a function. for an example
function local_scope() {
    var take = "Hi, This is Me";
    console.log(take);
}

console.log(local_scope());
// console.log(take) //in this line we are facing some errors like variable is undefined
// because of localization we are unable to call it outside of a function. 
// on the other hand the concept of global scope is tottaly different from it.
// we can access it from any where. for an example
var name = "Shahed";

function hello() {
    return "Hi " + name;
}
console.log(hello());
console.log(name); // as we can see we are able to access all of them from outside or inside of a function