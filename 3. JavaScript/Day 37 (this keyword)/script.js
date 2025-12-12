// this call apply bind
// this : class object method
// strict mode vs non strict mode


// non strict mode -----------------------------------------

// var a = 10;
// b = 20;          
// console.log(a, b);  // b not define yet it run

// function greet(name, name) {  // same parameter name
//     console.log(name, name);
// }
// greet("Rohit", "Mohit");   // print Mohit Mohit


// strict mode -----------------------------------------
// 'use strict';

// var a = 10;
// b = 20;       
// console.log(a, b);  // b not define yet it run

// function greet(name, name) {  // same parameter name
//     console.log(name, name);
// }
// greet("Rohit", "Mohit");   // print Mohit Mohit

// var a = 10;
// var b = 20;       
// console.log(a, b);  // b not define yet it run

// function greet(name1, name2) {  // same parameter name
//     console.log(name1, name2);
// }
// greet("Rohit", "Mohit");   // print Mohit Mohit


// ----------------------------------------------------------------
// global Object : In window it is called window, in node js it is called global

// console.log(window); // give error on node
// console.log(global);  // only run in node js

// globalThis points to global object of the environment
// console.log(globalThis); // this execute in both node js and browser


// ----------------------------------------------------------------
// this keyword-----
// this keyword in global scope : NodeJs(empty object), but in browser it point to global object
// 'use strict'

// console.log(this); 


// ----------------------------------------------------------------
// Function----

// const user = {
//     name : "Aayush", 
//     age : 20,
//     greet : function() {
//         console.log(this);   // this point to, who invoke the function (user invoke the function)
//         console.log(`Hi ${this.name}`);
//     }
// }
// // user.greet();  // this == user

// const user1 = {
//     name : "Rohit",
// }
// user1.greet = user.greet;
// user1.greet();

// --------------------------------------------
// without strict mode -> 'this' keyword point to global object
// with strict mode -> 'this' point to undefined

// 'use strict'
// function greet() {
//     console.log(this);   // point to global object
//     // console.log(`Hi ${this.name}`);
// }
// greet();
// --------------------------------------------

// 'use strict'

// function greet() {
//     console.log(`Hi ${this.name}`);
// }

// function incrementAge(value) {
//     this.age += value;
//     console.log(this.age);
// }

// function incrementAge(value, name) {
//     this.age += value;
//     this.name = name
//     console.log(this.age);
//     console.log(this.name);
// }

// const user = {
//     name : "Rohit",
//     age : 30,
// }

// const user2 = {
//     name : "Mohit",
//     age : 20,
// }

// calling greet function whose this will point to user
// greet.call(user);

// calling greet function whose this will point to user2
// greet.call(user2);

// incrementAge.call(user, 5);
// incrementAge.apply(user, [5]);   // apply
// incrementAge.call(user, 5, "Mohan");
// incrementAge.apply(user, [5, "Mohan"]);  // apply

// const increase = incrementAge.bind(user2, 10, "Aayush");
// // console.log(increase);
// increase();

// call apply bind, this point to the invoking object


// ----------------------------------------------------------------
// class

// class Person{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// // new : this point {} initially
// const p1 = new Person("Aayush", 20);
// console.log(p1);

// in class constructor, this will point to newly create empty object


// Arrow Function : this doesn't exist for arrow function, lexical environment scope
// console.log(this); // global scope --> empty scope

// const greet = () => {
//     console.log(this);  // node js : empty object and browser : global object
// }
// greet();

// arrow function take this keyword from its lexical environment scope


// const user = {
//     name : "Aayush",
//     greet : function() {
//         console.log(this);
//         function meet() {
//             console.log(this);  // strict mode : undefined and non strict : global object
//         }
//         meet();
//     }
// }
// user.greet();


// const user = {
//     name : "Aayush",
//     greet : function() {
//         const that = this;
//         function meet() {
//             console.log(that);  // strict mode : undefined and non strict : global object
//         }
//         meet();
//     }
// }
// user.greet();



// const stopwatch = {
//     second : 0,
//     start : function() {
        
//         const that = this;
//         setInterval(function() {
//             that.second++;
//             console.log(that.second);
//         }, 1000);
//     }
// }

// const stopwatch = {
//     second : 0,
//     start : function() {

//         setInterval(() => {
//             this.second++;
//             console.log(this.second);
//         }, 1000);
//     }
// }
// stopwatch.start();


// const user = {
//     name : "Aayush", 
//     greet : () => {
//         console.log(this);
//     }
// }
// user.greet();

// ----------------------------------------------------------------
// DOM

const button = document.getElementById('first');
// button.addEventListener('click', function(){
//     console.log(this);
// })
button.addEventListener('click', () => {
    console.log(this);
})

// this keyword : Global scope in Node Js: {}
// window : window object

// function : this keyword, if someone invoke the method or function, this will point to that
// Normal function : when no one is invoking it, non strict: global object for node and browser, strict: undefined

// arrow function : it takes this from its lexical environment