// const element = <h1>Hello Coder Army</h1>

// ReactDOM.createRoot(document.getElementById('root')).render(element);

// vite : is used to bundle the necessary code in one file rather than all unnecessary file which we can't use

// npm : node package manager -> 

//             Director (npm)
//          ---------------------            1. npm init
//         |   react             |           2. npm install react
//         |   reactDOM          |           3. npm install react-dom
//         |   Babel             |           4. npm install -- node module
//         |   .                 |
//         |   .                 |
//          ---------------------
//          already written code 


// devDependencies : means which required in development not in production
// devDependencies : means which required both in development and in production
// ESBuild : convert JSX to React.createElement. We don't have to install babel


// version---------

//                           19.2.0
//                           |  | |
//           -----------------  | -----------------
//           |                  |                 |
//         Major              Minor             patch
//       (existing          (updation         (bug fix)
//         code              new fun            ~19.2.0
//        update)              add)             ^19.2.0
//                           ^19.2.0

// ^19.2.0 --> auto update patch and minor
// ~19.2.0 --> auto update only patch


import React from "react";
import ReactDOM from "react-dom/client"

const element = <h1>Hello Coder Army</h1>

ReactDOM.createRoot(document.getElementById('root')).render(element);