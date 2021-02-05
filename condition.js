var something = "10";
if (something) {
    console.log("Value is added to the variable");
} else {
    console.log("Value is not added to the variable");
}

var array = [1, 5, 3, 6, 7, 4]

function sort(list) {
    for (i = 0; i < list.length; i++) {
        for (j = 0; j < list.length; j++) {
            if (list[i] < list[j]) {
                list[i] = list[i] ^ list[j];
                list[j] = list[i] ^ list[j];
                list[i] = list[i] ^ list[j];
            }
        }
    }
}

sort(array)
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}