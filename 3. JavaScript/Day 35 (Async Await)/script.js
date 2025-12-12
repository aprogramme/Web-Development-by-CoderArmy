// async await 
// async function always return a promise

// 1. -------------------------------------------------
// function greet() {
//     return "Rohit";
// }
// const response = greet();
// console.log(response);

// 2. -------------------------------------------------
// async function greet() {
//     return "Rohit";
// }
// const response = greet();
// console.log(response);

// 3. -------------------------------------------------
// async function greet() {
//     return "Rohit";
// }
// const response = greet();
// // console.log(response);
// response.then((data) => console.log(data));

// 4. -------------------------------------------------
// async function greet() {
//     return new Promise((resolve, reject) => {
//         resolve("Rohit");
//     })
// }
// const response = greet();
// // console.log(response);
// response.then((data) => console.log(data));

// 5. -------------------------------------------------
// async function greet() {
//     return new Promise((resolve, reject) => {
//         // resolve("Rohit");
//         reject("Rohit");
//     })
// }
// const response = greet();
// // console.log(response);
// response.then((data) => console.log(data))
// .catch((error) => console.log(error))

// 6. -------------------------------------------------
// Promise
// fetch("https://api.github.com/users");
// .then((response) => response.json())
// .then((data) => console.log(data));

//await
// const response = await fetch("https://api.github.com/users");
// const data = await response.json();
// console.log(data);

// console.log("Task done"); // it is execute after above code, fridge the code not good

// async-await
async function github() {
    console.log("Fetching start");
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    console.log(data);
}
github();
console.log("Task done");

