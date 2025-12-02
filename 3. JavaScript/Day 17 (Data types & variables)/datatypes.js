// data types

//1. primitive data type
// Number, string, boolean, undefined, null, bigint, symbol

// number------------------
// let a = 10;
// console.log(a);
// let b = 2.34;
// console.log(b)
// console.log("type = ",typeof(a))

// string------------------
// let c = "Strike is coming";
// let d = "Anjali";
// console.log(c, d);
// console.log("type = ",typeof(c))

// boolean------------------
// let login = true;
// let signup = false;
// console.log(login, signup);
// console.log("type = ",typeof(login))

// undefined------------------
// let user;
// console.log(user);
// console.log("type = ",typeof(user))

// bigint------------------
// let num = 3437345094389082940n;
// console.log(num)
// console.log("type = ",typeof(num))

// null------------------
// let weather = null;
// console.log(weather);
// console.log("type = ",typeof(weather))

// let weather = current_weather("Dwarka") 
// 25
// null
// undefined

// symbol------------------
// const id1 = Symbol("id");
// console.log(id1);

// const id2 = Symbol("id");
// console.log(id2);
// console.log(id1 == id2);
// console.log("type = ",typeof(id1))



//2. Non primitive data type
// Array, object, funtion

// array------------------
// let arr = [10, 20, 11, "Rohit", true, 23.5];
// console.log(arr);
// console.log("type = ",typeof(arr)) // but its type is object

// object------------------
// let users = {
//     name:"Aayush",
//     account:1234,
//     age:20,
//     category:'gen'
// }
// console.log(users);
// console.log("type = ",typeof(users))

// function------------------
// function add() {
//     console.log("hello");
// }
// add();

// // function can store in variable
// let e = function sub() {
//     console.log("hello world");
// }
// console.log(e);
// e();
// console.log("type = ",typeof(e)) // but its type is object





// primitive data type is immutable
let x = 10;
x = 20;
console.log(x);

let str = "Rohit";
// str = "Aayush";
// str[0] = "M";
// console.log(str[0]);


// non primitive data type is mutable
let arr = [10, 20, 30, 40];
// arr.push(90);
// arr[0] = 4444;
// console.log(arr);

let obj = {
    name:"Mohan",
    age:20
}
obj.name = "Rohan";
obj.age = 23;
console.log(obj);