// forEach Loop 
forEach 

const arr = [10, 20, 30, 69, 90, 54];

arr.forEach((number) => {   // element print
    console.log(number);
})

arr.forEach((number, index) => {  // element with index print
    console.log(number, index);
})

arr.forEach((number, index, arr) => {  // element with index and array print
    console.log(number, index, arr);
})

let sum = 0;
arr.forEach((number) => {
    sum += number;
})
console.log(sum);