// Scope and Closure , High Order Function 

// Scope ------------
// 1. Global -> Accessible to everyone
// 2. functional -> accessible only to that function 
// 3. Block level scope -> Accessible only to that block 

// 1. Global scope
// let a = 10;
// const b = 20;
// console.log(b);

// var e = 24;

// function greet() {

//     let c = 30;       // 2. functional scope
//     console.log(c);

//     console.log(a);   // accessible

//     var g = 50;
//     console.log(g);
// }
// greet();
// // console.log(c); // error --> cannot access c outside function
// // console.log(g);    // error

// if(true) {
//     let d = 40;       // 3. Block level scope
//     console.log(d);

//     console.log(b);   // accessible

//     var f = 25;
// }
// // console.log(d); // error --> cannot access d outside block
// console.log(f); // var of block can be accessible outside of block 


// ----------------------------------------------------------------

// let global = 30;     // global scope 

// function greet() {
//     let global = 40;       // functional scope
//     console.log(global);     // first it will check in functional scope if not found then it will check in global scope

//     function meet() {
//         let global = 20;
//         console.log(global);
//     }

//     meet();
// }
// greet();

// ----------------------------------------------------------

// function createCounter() {
//     function increment() {
//         console.log("I am increment function");
//         return 20;
//     }

//     // increment();
//     return increment;
//     // return increment();
// }

// // createCounter()
// const count = createCounter();
// // console.log(count);
// count();

// ----------------------------------------------------------
// CLOSURE-----------
// A function than remember variables from its outer scope even after the outer function has finished executing.
 
// function createCounter() {

//     let count = 0;
//     function increment() {   // this function remember count even after createCounter execution is over
//         count++;
//         return count;
//     }

//     return increment;  // function move count from stack to heap
// }

// // console.log(count); // error -> 

// const counter = createCounter();
// console.log(counter());   // because of closure it is remembering the count variable
// console.log(counter()); 
// console.log(counter());

// -----------------------------------------------------------
// Use case of closure-----------

// let balance = 500;

// // balance+="Rohit";
// balance-=500;
// console.log(balance);

// --------

// let user = {
//     balance: 500,
//     deposit: function(amount){
//         // console.log(this);
//         this.balance+=amount;
//         return this.balance;
//     }
// }

// console.log(user.deposit(200));  // this -> user object


// let balance = 500;
// // private

// let user = {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
// }

// balance="Rohit"

// user.balance="Rohit";
// console.log(user.getBalance());
// console.log(user.deposit("2sa00"));
// console.log(user.deposit(500));

// method ko access(function)
// balance: usko directly access na kr ske

// ----------------------------------------
// Using closure to achieve data privacy


// function createBankAccount(){

//     let balance = 500;
    
//     return {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
    
//     }
// }

// balance+=10000; // balance is not accessible here


// const customer = createBankAccount();
// console.log(customer.deposit(1000));
// console.log(customer.withdraw(200));
// console.log(customer.getBalance());


// Higher order function : function that takes another function as argument or returns a function as a result

function greet() {
    function sayHello() {
        console.log("Hello World!");
    }
    return sayHello;
}
const n = greet();
n();


function double(value){

    return function execute(num){
        return num*value;
    }
    
}
// const m = double(20);
// console.log(m(5));

const m = double(20)(5);
console.log(m);