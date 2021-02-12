var outerObj = {
    name: "Md Shahed Talukder",
    age: 23,
    job: "Expo & Co.",
    innnerObj: {
        name: "Md Koushik Ahmad",
        value: function() {
            console.log("My name is: " + this.name);
        }
    }
}

outerObj.innnerObj.value();
outerObj.innnerObj.value.apply(outerObj);
// this is working as same as call method and with this we can't differentiat call and apply method
// as we know we can pass many attributes in call method where can pass only two attributes in apply method
// now we will see some other example where we will see the difference
var shahed = {
    name: "Md Shahed Talukder",
    date_of_birth: 1996,
    age: function(currentyear, msg) {
        console.log(msg + " " + this.name + "'s age is: " + (currentyear - this.date_of_birth));
    }
}

var ashik = {
    name: "Md Ashik Mia",
    date_of_birth: 1995
}

shahed.age(2020, "Hello")
shahed.age.apply(ashik, [2020, "Hello"])
    // here you can see we are passing an array to do the job here. but we don't need to pass an array in call method
    // and that's the difference