// // Array:

// let marks1 = 100;
// let marks2 = 89;
// let marks3 = 67;
// let marks4 = 95;
// let marks5 = 90;

// // same type
// let marks = [100, 89, 67, 95, 90];

// console.log(marks);
// console.log(marks.length);

// // heterogenous type
// let arr = [100, 30, "Rohit", true, 2.34];
// console.log(arr);
// console.log(arr[0]);
// console.log(typeof arr);

// arr[1] = 89;
// console.log(arr);

// // push : Insert element at end
// arr.push(45);
// arr.push("Strike");
// console.log(arr);

// // pop operation: Delete element from end
// arr.pop();
// console.log(arr);

// // add element at start, delete element at start
// arr.unshift(10);     // add at starting place
// console.log(arr);

// arr.shift();       // delete starting place element
// console.log(arr);

// --------------------------------------------------
// how iterate on array

// let arr = [10, 30, 50, 90, 11];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for-of loop
// for(let num of arr) {
//     console.log(num);
// }

// ---------------------------------------------------

// let arr = [10, 30, 50, 90, 11];
// console.log(arr);
// let arr1 = arr;

// arr1.push(22);
// console.log(arr);
// console.log(arr1);

// ---------------------------------------------------
// Object (non premitive) : Copy by reference
// Object (premitive) : Copy by value

// const arr = [10, 30, 50, 90, 11];
// // arr = [89, 23, 43];   // Error
// arr[2] = 80;     // valid
// arr.push(45);        // valid
// console.log(arr);

// ---------------------------------------------------
// slice & splice
// const arr = [10, 30, 50, 90, 11];
// const arr1 = arr.slice(2, 4);    // return new array
// console.log(arr);
// console.log(arr1);

// const arr2 = arr.splice(1, 3);  // change in original array
// console.log(arr2);
// console.log(arr);

// const arr2 = arr.splice(1, 3, "Rohit", 20); 
// console.log(arr2); 
// console.log(arr);

// ---------------------------------------------------
// spread operator (...)
// const arr = [10, 20, 50, 30, 60];
// const arr1 = ["Rohit", 11, true];
// const arr3 = [98, 12, false];

// arr.push(arr1);
// console.log(arr);

// const arr2 = arr.concat(arr1);  // return new array
// console.log(arr2);

// const arr2 = arr.concat(arr1, arr3);  // return new array
// console.log(arr2);
 
// const arr2 = [arr, arr1, arr3];
// console.log(arr2);

// spread(...) operator
// const arr2 = [...arr, ...arr1, ...arr3]; // spread operator
// console.log(arr2);

// ---------------------------------------------------
// join()
// const names = ["Alice", "Bob", "Charlie"];
// console.log(typeof names);
// console.log(names.toString());
// console.log( typeof names.toString());   

// console.log(names.join("-"));
// console.log(names.join("+"));

// console.log(names.indexOf("Bob"));
// console.log(names.includes("Bob"));

// ---------------------------------------------------
// sort on basis of ASCII table
const names = ["Alice", "Rohit", "Bob", "Mohit", "Charlie"];
// names.sort();  // ascending order
// names.reverse();
// console.log(names);

// descending order
// names.sort();
// names.reverse();
// console.log(names);

// const a = [101, 90, 80, 32, 91];
// a.sort();        // sort on basis of ASCII table  (character by character comparison)
// console.log(a);
// const arr = [10, "Rohit", "Mohit", true]
// arr.sort();
// console.log(arr);

// ascending order
// const arr = [10, 40, 32, 98, 56, 71];
// arr.sort((a, b) => a-b)
// -ve : pehle a aayega phir b aayega
// +ve : pehle b aayega phir a aayega
// console.log(arr);

// descending order
// arr.sort((a, b) => b-a);
// console.log(arr);

// ---------------------------------------------------
// flat() -->  Nested array ko single array me convert krta h
// arr[arr[arr[]]]
// const arr = [10, 40, 32, [40, 90, 11], 80];
// console.log(arr);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[3][1]);
// const arr1 = arr.flat();   // return new array
// console.log(arr1);

const arr2 = [10, 40, 32, [40, 90, [19, 32, 69], 11], 80];
console.log(arr2[3][2][1]);
// const a = arr2.flat();  // 1 level flat krta h
// console.log(a);

// const a1 = arr2.flat(2);  // 2 level flat krta h
// console.log(a1);

const a2 = arr2.flat(Infinity);  // all level flat krta h
console.log(a2);

// ---------------------------------------------------
// Why array is not array in Js?  Array is object in Js
// Definition : Array store same type of data in contiguos memory location
// Access Index --> base_address + index * size_of_data_type

// this array contains different type of data : every data takes different memory space
const arrr = [10, 309, "Rohit", 9.3, true];   
console.log(arrr["1"])
arrr.name = "Mohit";
console.log(arrr)
