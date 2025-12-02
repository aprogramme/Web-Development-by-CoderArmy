// -------Execution Context-------

// 1.Memory allocation phase---------
// a = undefined
// b = undefined
// addNumber = fnCode
// sumResult1 = undefined
// sumResult2 = undefined

// 2. Execution phase---------
// a = 10
// b = 20
// addNumber = {fncode} 
// sumResult1 = 30
// sumResult2 = 9


// console.log(a);  // undefined
var a = 10;
var b = 20;
// console.log(a);  // 10

// var sumResult1 = addNumber(a, b);
// console.log(sumResult1);

function addNumber(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

var sumResult1 = addNumber(a, b);
var sumResult2 = addNumber(4, 5);
console.log(sumResult1, sumResult2);