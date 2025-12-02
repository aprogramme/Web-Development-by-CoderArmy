// object
// Key : value pair

// const user = {
//     // key: value
//     name: "Aayush",
//     age: 20,
//     email: "aayush@gmail.com",
//     amount: 3500,
//     "home address": "Noida"
// }

// console.log(user);
// console.log(typeof user);
// console.log(user.name);     // accessing value using dot notation
// console.log(user.age);
// console.log(user.email);
// console.log(user.amount);
// console.log(user["home address"]);  // accessing value using bracket notation

// CRUD operation: Crete Read Update Delete----------

// // Create----------
// const user = {
//     name: "Aayush",
//     age: 20,
//     email: "aayush@gmail.com",
//     amount: 3500,
// }

// // Update----------
// user.aadhar = 354514131016;   // adding new key value pair if not present
// user.amount = 5000;           // updating existing key value pair

// // Delete----------
// delete user.email;      // deleting existing key value pair

// // Read----------
// console.log(user);
 

// behind the screen key stored in string form----
// const user = {
//     // key: value
//     name: "Aayush",
//     age: 20,
//     email: "aayush@gmail.com",
//     amount: 3500,
//     "home address": "Noida"
// }

// console.log(user["name"]);
// console.log(user["age"]);
// console.log(user["home address"]);

// -----------------------------------------------------------------

// const user = {
//     // key: value
//     name: "Aayush",
//     age: 20,
//     email: "aayush@gmail.com",
//     amount: 3500,
//     "home address": "Noida"
// }

// const user1 = user;            // reference
// user1.age = 56;                
// console.log(user);             // both user and user1 age will be updated
// console.log(Object.keys(user));  // return array of keys
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for in loop on object---
// for(let keys in user) {
//     console.log(keys);
//     console.log(keys, user[keys]);
// }

// -----------------------------------------------------------------
// object destructuring---------

// const user = {
//     // key: value
//     name: "Aayush",
//     age: 20,
//     email: "aayush@gmail.com",
//     amount: 3500 
// }

// const name = user.name;
// const age = user.age;
// console.log(name, age);


// object destructure---
// const {name, age} = user;
// const {name: userName, age: userAge} = user;
// console.log(userName, userAge);


// array destructuring---
// const arr = [10, 20, 30, 40, 50];
// const [first, second] = arr;
// console.log(first, second);


// for of loop on object-------
// const temp = Object.keys(user)
// for(let keys of temp) {
//     console.log(keys);
// }


// const temp = Object.values(user)
// for(let values of temp) {
//     console.log(values);
// }


// const temp = Object.entries(user)
// for(let values of temp) {
//     console.log(values);
// }

// for(let [keys, values] of temp) {
//     console.log(keys, values);
// }

// -----------------------------------------------------------------
// function in object---

// const user = {
//     // key: value
//     name: "Aayush", 
//     age: 20,
//     email: "aayush@gmail.com",
//     amount: 3500,
//     greeting: function() {
//         // console.log("Strike is coming on 18 october");
//         // console.log(`Strike is coming on 18 october ${user.name}`);
//         console.log(`Strike is coming on 18 october ${this.name}`);
//         return 20;
//     }
// }
// const va = user.greeting();
// console.log(va);

// const user2 = {
//     name: "Mohit",
//     account: 201
// }
// user2.greeting = user.greeting;
// user2.greeting();

// -----------------------------------------------------------------
// nested object---

// const user = {
//     // key: value
//     name: "Aayush",
//     age: 20,
//     email: "aayush@gmail.com",
//     amount: 3500,
//     address: {
//         city: "Patna",
//         state: "Bihar"
//     }
// }
// console.log(user);
// console.log(user.address.city);

// shallow copy-------------------
// const user2 = {...user};  // not same, different/independent copy
// user2.name = "Rohit";     // change in user2 will not affect user
// console.log(user2);
// console.log(user);

// user2.address.city = "Dwarka";  // same reference for nested object, only top level is copied
// console.log(user2);
// console.log(user);

// deep copy-------------------
// const user2 = structuredClone(user);
// user2.address.city = "Dwarka";         // now both are independent
// console.log(user2);
// console.log(user);

// -----------------------------------------------------------------

// key: String or Symbol
// const sym = Symbol("id");
// const user = {
//     name: "Aayush",
//     age: 20,
//     0: 100,           // key as number --> converted to string "0"
//     2: "Mohan",       // key as number --> converted to string "2"
//     [sym]: "Hello"
// } 
 
// // console.log(user.0);     // invalid
// console.log(user[0]);
// console.log(user[sym]);


// const arr = [10, 20, 30, 40];
// {
//     0: 10,
//     1: 20,
//     2: 30,
//     3: 40
// }