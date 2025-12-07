// Promise --> is an object
// 3 stage :
//   pending
//   fullfilled
//   reject


// console.log("Hello World Start");

// const p1 = fetch("https://api.github.com/users");
// console.log(p1);

// fullfilled or reject 
// asynchronous task --> not return result immediately
// p1.then((response) => {
//     // console.log(response);       // data come in byte form which is not in read form, we have to convert into Js object
//     console.log(response.json());   // json convert data to js object format
// });

// console.log("Hello World End")

// ----------------------------------------------------

// const p1 = fetch("https://api.github.com/users");

// const p2 = p1.then((response) => {
//     return response.json();
// });

// p2.then((response) => {
//     console.log(response);
// })

// console.log("Hello World End")

// --------------------------------------------------------------
// Chaining of Promises

// console.log("Hello World Start");

// fetch("https://api.github.com/users")
// .then((response) => {
//     return response.json();
// })
// .then((data) => {
//     // console.log(data);
//     const parent = document.getElementById('first');

//     for(let i=0; i<=data.length; i++) {
//         const image = document.createElement('img');    
//         image.src = data[i].avatar_url;
//         image.style.height = "100px"
//         image.style.width = "100px"
    
//         parent.append(image);
//     }
// })

// console.log("Hello World End")


// --------------------------------------------------
// JSON : 
// Universal(c++, java, python);
// JavaScript Object Notation -->  It is a format every language can understand (c++, python, java...);
// No undefined, no function, it is string format 
// transfer data between two different language


// JavaScript Object-
// const J1 = {
//     name : "Aayush",
//     age : 30,
//     address : "Dwarka",
//     c : undefined,
// }

// // convert to JSON----
// const jsonFormat = JSON.stringify(J1);
// console.log(jsonFormat);     // ignore undefined


// JSON format-
// const jsonFormat = `{
//     "name" : "Aayush",
//     "age" : 30,
//     "address" : "Dwarka"
// }`;

// // convert to Js object----
// const jsObject = JSON.parse(jsonFormat);
// console.log(jsObject);

// ----------------------------------------------------------------

// fetch("https://api.github.com/users")
// .then((response) => {

//     console.log(response);
//     if(!response.ok) {
//         throw new Error("Data is not present");
//     }
//     return response.json();
// })
// .then((data) => {
//     // console.log(data);
//     const parent = document.getElementById('first');

//     for(let i=0; i<data.length; i++) {
//         const image = document.createElement('img');    
//         image.src = data[i].avatar_url;
//         image.style.height = "100px"
//         image.style.width = "100px"
    
//         parent.append(image);
//     }
// })
// .catch((error) => {
//     const parent = document.getElementById('first');
//     parent.textContent = error.message;
// })


// NOTE :
// Reject kb chalti h ?
// Jb mera internet off hai ya server down hai ya DNS down h tb

// Or sabhi case fulfill hogi agar url wrong h phir v ye case fulfill hogi

// ----------------------------------------------------------------
// Promise creation -

// const p1 = new Promise((resolve, reject) => {
//     resolve("Resolve");
//     // reject("Reject");  // show error
// })
// console.log(response);


const p1 = new Promise((resolve, reject) => {
    // resolve("Resolve");
    resolve({
        name: "Aayush",
        age: 22,
    })
    // reject("Reject");  // error
})
p1.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
})

// ----------------------------------------------------------------

