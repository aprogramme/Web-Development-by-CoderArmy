// JavaScript is a single threaded synchronous language. 
// Means one task execute at a time, no two or multiple task execute parallely. 
// Ex 
// console.log("first");  // execute 1st
// console.log("second");  // execute 2nd
// console.log("third");   // execute 3rd

// 1.
// console.log("First");
// let sum = 0;
// for(let i=0; i<3000000000; i++){
//     sum += i;
// }
// console.log(sum);
// console.log("Last");

// 2. 
// console.log("Hello");
// setTimeout(() => {
//     console.log("Time Out Execution");
// }, 5000)
// console.log("I am the end");

// 3. 
console.log("Hi");

const button1 = document.getElementById('button1');
button1.addEventListener('click', () => {
    console.log("Button1 is clicked");
});

const button2 = document.getElementById('button2');
button2.addEventListener('click', () => {
    console.log("Button2 is clicked");
});

const button3 = document.getElementById('button3');
button3.addEventListener('click', () => {
    console.log("Button3 is clicked");
});

console.log("I am the end");


// Web API -> A function call - used to execute task parallel for Js. When function call Js push every code to window for execution.
//                              web API store setTimeout and then push in callback queue.
// Event Loop -> take function from callback queue and push in call stack for execution if stack is empty. Otherwise code wait in queue


//           Js is a single threaded synchronous language
// --------------------------------------------------------------------------------------
// |                                                                                    |                                                                                                          
// |            call stack                                  Web API                     |   
// |          ------------------------                  -----------------------         |
// |          |                      |                  |                     |         |
// |          |                      |                  |  settimeout/        |         |
// |          |                      |                  |  setInterval        | <-------|--------------callbackFn, 5s
// |          |                      |                  |  DOM API            |         |                     |
// |          |                      |                  |  fetch api          |         |                     |
// |          |                      |                  |  local storage      |         |                     |
// |          |                      |                  |  console.log        |         |                     |
// |          |                      |                  |  location           |         |                     |
// |          |                      |                  |                     |         |                     |
// |          ------------------------                  -----------------------         |                     |
// |                      ^                                                             |                     |
// |                      |                                                             |                     |
// -----------------------|--------------------------------------------------------------                     |
//                        |                                                                                   |
//                        |                                                                                   |          
//                        |                                callback queue                                     |
//             |----------------------|             -------------------------------                           |
//             |      Event           |             |                             |                           |
//             |      loop            |<------------|   callbackFn                |<--------------------------|
//             |----------------------|             |                             |
//                                                  |                             |
//                                                  -------------------------------
//             Event loop take waiting fn form
//             callback queue and push in stack 
//             for execution if and only if stack 
//             is empty.
