// this is kind of dictionary of a python and much more flexible then array. it has key value pair as like as dictionary
user1 = {
    'name': 'Md Shahed Talukder',
    'age': 23,
    'phone_no': '01762178238'
}

console.log(user1)
    // we have to use two types of notations to access those values
    // one is dot notation 
    // another one is brackets notation
    // let's try both of them
console.log(user1.name)
console.log(user1['age'])
    // here we can see dot notation is better then brackets notation
    // now let's add some item

user1.email = "shahedtalukder51@gmail.com"
console.log(user1)
    // as you can see we can easily add any item with it's key and there is no need to use any kind of method to add keys in it.
    // object in js is very easy and more complex that we can add a function in it. and that's amezing. let's try this

user1.check_age = function() {
    if (user1.age <= 21) {
        console.log("This is awesome");
    } else {
        console.log("This is amezing");
    }
}
console.log(user1.check_age())
    // here we saw that we can add a function but let's see can we create an object which will contain a function already in it.

another_object = {
    even_odd: function(num) {
        if (num % 2 == 0) {
            console.log("This is an even number!");
        } else {
            console.log("This is odd number");
        }
    },
    normal_print: function() {
        console.log("This will just print Hello world!");
    },
    name: 'Md Shahed Talukder',
    age: 21,
    phone: '01762178238',
    email: 'shahedtalukder51@gmail.com',
    check_age: function(age) {
        if (age >= 18) {
            console.log("You are adult now");
        } else {
            console.log("You are a tenage now");
        }
    }
}

console.log(another_object)
    // as you can see we have successfully created the object with our function
    // now let's pass an argument in it 
console.log(another_object.even_odd(21))
    // we have successfully pass an argument in our objects insider function...
    // this is really cool.

// now let's loop in array 
for (i in another_object) {
    console.log(i)
}
// now let's talk about array inside an object
// here we will be able to store an array inside an object
var objarr = {
    user: 1,
    names: ['shahed', 'ashik', 'azad', 'razib'],
    id: [21, 23, 24, 25]
}
console.log(objarr.names)
    // this is a simple example of an object which is containing an array inside it
    // now we will make an array which will contain an object inside it, here it is.
var arrobj = [
    'new_arr',
    {
        names: ['shahed', 'ashik', 'azad', 'razib'],
        id: [21, 23, 24, 25],
    },
    {
        country: ['bangladesh', 'india', 'pakistan']
    },
]
console.log(arrobj)
console.log(arrobj[1])
console.log(arrobj[1].names)
    // this is a simple example of making an array inside an objects