// Prototype and class

// 1. Prototype -----------------------------------------------------

// const obj = {
//     name : "Aayush",
//     age : 20,
//     greet : function() {
//         console.log("Hello");
//     }
// };

// console.log(obj);
// console.log(obj.name);
// console.log(obj.age);
// obj.greet();

// hasOwnProperty not defined in obj - where this come from?
// console.log(obj.hasOwnProperty("name"));   // true
// console.log(obj.toString());


// const obj2 = {
//     account : 30
// }
// // console.log(obj2.account);

// obj2.__proto__ = obj;   // obj2 can now access property of obj

// console.log(obj2.name)

// NOTE :
// Behind the sceen when obj created it linked with Object.prototype and use its methods


// let arr = [10, 20, 30];
// arr.length();     // every array method is in array prototype



//                                                                                        null
//                                                                                         ^
//                                                                                         |
//                  Array.prototype                               Object.prototype         |
//             ----------------------------                    -------------------         |                  function.prototype     
//             |       sort               |                    |                  |---------                         ------------------------
//             |        length            |------------------->|                  |                         |                      |
//             |        slice             |                    |                  |<------------------------|                      |
//             |                          |                    --------------------                         |                      |
//             ----------------------------                               ^                                 |                      |
//                         ^                                              |                                 ------------------------
//                         |                                              |                                            ^
//          arr.__proto__  |                                              |                                 f.__proto  |
//                         |                                              |                                            |
//              -------------------------                      -----------------------                      -----------------------
//             |                        |                      |  const obj={        |                      | function f() {}     |
//             |                        |                      |     name: "A",      |                      |                     |
//             |                        |                      |     age : 20        |                      |                     |
//             |                        |                      |  }                  |                      |                     |
//             --------------------------                      -----------------------                      -----------------------
//                      array                                          obj                                        function
//             array point Array.prototype                                                             function f point function.prototype 
//             which point Object.prototype                                                            which point object.prototype
//             that's why typeof array is                                                              that's why typeof function is object
//             object 



// 2. class -----------------------------------------------------

// const obj1 = {
//     name : "Aayush",
//     age : 20, 
//     greet : function() {
//         console.log(`Hello ${this.name}`)
//     }
// }
// const obj2 = {
//     name : "Rohit",
//     age : 30, 
//     greet : function() {
//         console.log(`Hello ${this.name}`)
//     }
// }
// function repeating

// ----------------------------------------
// class Person{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHi() {
//         console.log(`Hi ${this.name}`);
//     }
// }

// const user = new Person("Aayush", 20);
// // console.log(user);
// console.log(user.name);
// console.log(user.age);

// const user1 = new Person("Rohit", 30);
// console.log(user1.name);
// console.log(user1.age);

// ----------------------------------------

class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log(`Hi ${this.name}`);
    }
}

class Customer extends Person {
    constructor(name, age, account, balance) {
        super(name, age);       // calling contructor of parent
        this.account = account;
        this.balance = balance;
    }

    checkBalance() {
        return this.balance;
    }
}

const c1 = new Customer("Rohit", 30, 2341, 500);
console.log(c1);
console.log(c1.name);
console.log(c1.age);
console.log(c1.checkBalance());