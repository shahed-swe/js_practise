var newarr = new Array('Shahed', 'Ashik', 'Azad', 'Razib', 'Atik') // this method of declareing array is quite difficult and we will not use them like that
console.log(newarr)

var newarray = ['Shahed', 'Ashik', 'Azad', 'Razib', 'Atik'] // this method is quite easy and we will use them like that
console.log(newarray)
    // both will give us same output
    // now we will try to travarse each of them

console.log(newarr[1])
console.log(newarr[2])
console.log(newarr[4])
    // 
console.log(newarray[1])
console.log(newarray[4])
console.log(newarray[5]) // this is showing undefined cause we don't have sixth element in our array

// now let's check the length of our array
console.log(newarray.length)
    // we can travarse array items with this length using loops
    // for an example
for (i = 0; i < newarray.length; i++) {
    console.log(newarray[i]);
}
// now let's push some item into our array
newarray.push(1)
console.log(newarray)
newarray.push('Alex')
console.log(newarray)

// we can pop them from our array with pop() method and this will pop our last items
newarray.pop()
console.log(newarray)
    // but if we want to pop and item from first we have to use shift() method
newarray.shift()
console.log(newarray)
    // as same as that we can add an item at first using unshift() method
newarray.unshift('Shahed Talukder')
console.log(newarray)
    // now to know what is the idex number of array item we will use indexOf() method
console.log(newarray.indexOf('Razib'))
    // we can remove an item or a bunch of item using the index number of an array with splice() method
newarray.splice(1, 1)
console.log(newarray)
    //we can store our sliced array items into another array like that 
var arr = newarray.splice(2)
console.log(arr)