// for loop practise
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < i; j++) {
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}
// do this same thing using while loop

var o = 0;
var k = 0;
while (o < 10) {
    while (k < o) {
        process.stdout.write("*");
        k++;
    }
    process.stdout.write("\n")
    o++;
}

// we can't do the exact same thing with for and while. and that's for why i will use only for loop everytime everywhere
var x = 11
do {
    console.log(x)
    x++;
} while (x < 10)
// do while is as similler as while but not only in one portoin and that is 

// break and continue statement
for (i = 0; i < 10; i++) {
    if (i == 7) {
        break;
    } else {
        console.log(i);
    }
}
// that was an example of break statement 
for (i = 0; i < 10; i++) {
    if (i == 7) {
        continue;
    } else {
        console.log(i);
    }
}