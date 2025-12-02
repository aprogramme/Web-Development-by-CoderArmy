// Event : Mouse move, click, double click
// Event Listener : Listening the event(click)
// Event Action/handler : take action


// function handleClick() {
//     const element = document.getElementById("first");
//     element.textContent = "Strike is Coming";
// }

// To use more than one event 
// const element = document.getElementById("first");
// element.onclick = function handleClick() {
//     element.style.backgroundColor = "pink";
// }
// // it will override the above function
// element.onclick = function handleClick() {
//     element.textContent = "I am Developer";
// }

// To use multiple event : addEventListener------------------
const element = document.getElementById("first");
// click--------
// element.addEventListener('click', () => {
//     element.textContent = "Strike is coming";
// })
// element.addEventListener('click', () => {
//     element.style.backgroundColor = "blue";
// })

// element.addEventListener('click', () => {
//     element.textContent = "Strike is coming";
//     element.style.backgroundColor = "blue";
// })


// double click--------
// element.addEventListener('dblclick', () => {
//     element.textContent = "Strike is coming";
// })

// mouse enter--------
// element.addEventListener('mouseenter', () => {
//     element.textContent = "Strike is coming";
// })

// mouse out--------
// element.addEventListener('mouseout', () => {
//     element.textContent = "Strike is coming";
// })

// mouse leave--------
// element.addEventListener('mouseleave', () => {
//     element.textContent = "Strike is coming";
// })


// -------------------------------------------------------------
// const box1 = document.getElementById("child1");
 
// const parents = document.getElementById("parent");
// console.log(parents.children);

// for(let child of parents.children) {
//     child.addEventListener('click', () => {
//         child.textContent = "I am clicked";
//     })
// }


// ----------------------------------------------------------------
// Bubbling event
//    Capture phase
//    Target phase
//    Bubble phase

// const grandParent = document.getElementById("grandparent");
// grandParent.addEventListener('click', () => {
//     console.log("GrandParent is clicked");
// })

// const parent = document.getElementById("parent");
// parent.addEventListener('click', () => {
//     console.log("Parent is clicked");
// })

// const child = document.getElementById("child");
// child.addEventListener('click', () => {
//     console.log("Child is clicked");
// })

// By default it is false----------
// const grandParent = document.getElementById("grandparent");
// grandParent.addEventListener('click', () => {
//     console.log("GrandParent is clicked");
// }, false)  // capture phase is off  -->  print later

// const parent = document.getElementById("parent");
// parent.addEventListener('click', () => {
//     console.log("Parent is clicked");
// }, false)

// const child = document.getElementById("child");
// child.addEventListener('click', () => {
//     console.log("Child is clicked");
// }, false)

// By turning false to true----------
// const grandParent = document.getElementById("grandparent");
// grandParent.addEventListener('click', (e) => {
//     console.log(e);     // event object
//     console.log("GrandParent is clicked");
// }, true)  // capture phase is on  -->  print first

// const parent = document.getElementById("parent");
// parent.addEventListener('click', () => {
//     console.log("Parent is clicked");
// }, true)

// const child = document.getElementById("child");
// child.addEventListener('click', () => {
//     console.log("Child is clicked");
// }, true)

// true --> capture phase is on : top to down trigger
// false --> capture phase is off : down to top trigger

// -------------------------------------

// const grandParent = document.getElementById("grandparent");
// grandParent.addEventListener('click', (e) => {
//     console.log(e.target);   // return which one trigger the event
//     // console.log("GrandParent is clicked");
// })

// const parent = document.getElementById("parent");
// parent.addEventListener('click', (e) => {
//     // console.log(e);
//     // console.log("Parent is clicked");
// })

// const child = document.getElementById("child");
// child.addEventListener('click', (e) => {
//     // console.log(e);
//     // e.stopPropagation();   // stop bubbling
//     // console.log("Child is clicked");
// })


// ----------------------------------------------------
 
const parents = document.getElementById("parent");
// console.log(parents.children);

// for(let child of parents.children) {
//     child.addEventListener('click', () => {
//         child.textContent = "I am clicked";
//     })
// }

parents.addEventListener('click', (e) => {
    // console.log(e.target);
    e.target.textContent = "I am clicked";
})

// how to remove addEventListener---------
function handleClick(e) {
    e.target.textContent = "I am clicked";
}

parents.addEventListener('click', handleClick);

parents.removeEventListener('click', handleClick);