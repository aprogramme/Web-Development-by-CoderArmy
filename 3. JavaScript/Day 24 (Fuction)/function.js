// function : Reusable block of code

// function greeting() {
//     console.log("Strike is coming on 18 october");
// }

// greeting();
// console.log(greeting);
// console.log(greeting());


// function addNumber(num1, num2) {   //parameter
//     const sum = num1+num2;
//     console.log(sum);
// }
// addNumber(20, 30);  // argument
// addNumber(45, 23);  // argument

// function addNumber(num1, num2, num3=0, num4=0) { 
//     const sum = num1 + num2 + num3 + num4;
//     console.log(sum);
// }
// addNumber(20, 30, 10);    
// addNumber(20, 30, 10, 50);   


// rest operator    --------------------------------
// function addNumber(...num) {
//     console.log(num);
// }
// addNumber(20, 30);
// addNumber(20, 30, 10);
// addNumber(20, 30, 10, 50);

// function addNumber(...num) {
//     let sum = 0;

//     for(let n of num) {
//         sum += n;
//     }
//     console.log(sum);
// }
// addNumber(20, 30);
// addNumber(20, 30, 10);


// spread operator vs rest operator   --------------------------------
// const arr = [10, 20, 40, 50, 60];
// // const [first, second] = arr;
// const [first, second, ...num] = arr;
// console.log(first, second, num);

// const arr2 = [100, 200, 300];
// // const ans = [arr, arr2];
// const ans = [...arr, ...arr2];
// console.log(ans);


// function expression   --------------------------------
// 1. ----
// addNumber(20, 30);  // it works because of hoisting
// function addNumber(num1, num2) {   //parameter
//     const sum = num1+num2;
//     console.log(sum);
// }
// addNumber(20, 30);

// 2. ----
// function stored in variable
// console.log(add(3,4));     // it give error because of no hoisting
// const add = function(num1, num2) {
//     return num1 + num2;
// }
// console.log(add(3,4));

// 3. ----
// arrow function --------------------------------

// const greet = () => {
//     console.log("Hello");
// }
// greet();

// const addNumber = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addNumber(2, 3));

// const addNumber = (num1, num2) => num1 + num2;
// console.log(addNumber(20, 30));


// const squar = (num) => num * num;
// console.log(squar(5));

// if we have single parameter, no need of this ()
// const squar = num => num * num;
// console.log(squar(5));


// to return object   -------
// a.
// const greeting = () => {
//     let user = {
//         name:"Rohit",
//         age:20
//     }
//     return user;
// }
// console.log(greeting());

// b.
// const greeting = () => {
//     return {
//         name:"Rohit",
//         age:20
//     }
// }
// console.log(greeting());

// c. to handle object   ---------------------------
// const greeting = () => ({name:"Rohit", age:20})
// console.log(greeting());


// 4. ----
// IIFE function : immediatly call --------------------------------
// function greet() {    // not immediately invoked
//     console.log("hello")
// }();

// (function greet() {    // immediately invoked function expression
//     console.log("hello")
// })();

// (() => {
//     console.log("Hi");
// })();


// call back function  --------------------------------

// function greet() {
//     console.log("Function1");
// }

// function meet() {
//     console.log("Function2");
// }
// meet(greet);
// meet(greet());

// ---------------
// function greet() {
//     console.log("Greeting");
// }
// function dance() {
//     console.log("Dancing");
// }
// function meet(callback) {
//     console.log("Start");
//     callback();
//     // greet();           //hard code. not appropriate way, if we want to call another function
//     console.log("End")
// }
// // meet(greet); 
// meet(dance); 

// ---------------------------------------------

// Hard coding example-----
// function zomatoOrderPlaced() {
//     console.log("We have started preparing your food");
// }

// function payment(amount) {
//     console.log(`${amount} payment has initialized`);
//     console.log("Payment received");
//     zomatoOrderPlaced();        // hard coding

//     // GST Government
//     // Rider payment
//     // Company profit
// }
// payment(500);

// Soft coding example-----
function blinkitOrderPlaced() {
    console.log("Blinkit - We have started packing your order");
}

function zomatoOrderPlaced() {
    console.log("Zomato - We have started preparing your food");
}

function payment(amount, callback) {
    console.log(`${amount} payment has initialized`);
    console.log("Payment received");
    callback();

    // GST Government
    console.log("GST given to Govt.")
    // Rider payment
    console.log("Rider payment");
    // Company profit
    console.log("Company profit");
}
// payment(500, zomatoOrderPlaced);
payment(300, blinkitOrderPlaced);