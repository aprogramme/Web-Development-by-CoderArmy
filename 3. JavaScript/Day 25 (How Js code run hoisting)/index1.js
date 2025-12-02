// Execution Context 
// Memory allocation
// let a = <uninitialised> (Temporal dead zone) can't access until value alloted to it
// const b = <uninitialised> (Temporal dead zone)

// console.log(a);  // cannot access 'a' before initialization (let)
// console.log*=(b);
let a = 10;
const b = 20;
// console.log(a); 
// console.log(b); 

// const result = addNumber(a, b);  // cannot access 'addNumber' before initialization
// console.log(result);
const addNumber = function(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const result = addNumber(a, b);
console.log(result);   // console.log is not a part of js 