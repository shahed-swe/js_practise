function calculate() {
    event.preventDefault();
    var first_val = document.getElementById('first_value').value;
    var second_val = document.getElementById('second_value').value;
    var sel = document.getElementById('selection').value;

    switch (sel) {
        case '1':
            summation(first_val, second_val);
            break;
        case '2':
            subtraction(first_val, second_val);
            break;
        case '3':
            multiplication(first_val, second_val);
            break;
        case '4':
            division(first_val, second_val);
            break;
    }
}

function summation(a, b) {
    var another_a = parseFloat(a);
    var another_b = parseFloat(b);
    var summation = another_a + another_b;
    document.getElementById('answer').innerHTML = summation.toString(10);
}

function subtraction(a, b) {
    var another_a = parseFloat(a);
    var another_b = parseFloat(b);
    var subtraction = another_a - another_b;
    document.getElementById('answer').innerHTML = subtraction.toString(10);
}

function multiplication(a, b) {
    var another_a = parseFloat(a);
    var another_b = parseFloat(b);
    var multiplication = another_a * another_b;
    document.getElementById('answer').innerHTML = multiplication.toString(10);
}

function division(a, b) {
    var another_a = parseFloat(a);
    var another_b = parseFloat(b);
    var division = another_a / another_b;
    document.getElementById('answer').innerHTML = division.toString(10);
}