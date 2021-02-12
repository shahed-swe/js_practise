var outerObj = {
    name: "Md Shahed Talukder",
    age: 23,
    job: "Expo & Co",
    innerObj: {
        name: "MD Ashik Mia",
        show: function() {
            console.log("My name is: " + this.name);
        },
    }
}
outerObj.innerObj.show.bind();
console.log(outerObj.innerObj.show.bind()) // here we can see this is returning a function for us 
    // we can use it by assigning it to another variable
var take_func = outerObj.innerObj.show.bind()
take_func() //here this is returning on funcion but not giving us the value of this
    // but we can get value of outerObj name by passing it into bind() function
var take_func = outerObj.innerObj.show.bind(outerObj)
take_func()
    // let's see another example
var shahed = {
    name: "Md Shahed Talukder",
    date_of_birth: 1996,
    age: function(currentyear, msg) {
        console.log(msg + ' ' + this.name + ' your age is: ' + (currentyear - this.date_of_birth));
    }
}

var ashik = {
    name: "Md Ashik Rahman",
    date_of_birth: 1995,
}

var shahedAge = shahed.age.bind(shahed, 2020)
shahedAge("Hello Buddy")
var ashikAge = shahed.age.bind(ashik, 2020)
ashikAge("Hello")
    // this is another example by which we can properly understand about bind method()