// 1. 
// const reed = document.getElementById('red');
// reed.addEventListener('click', () => {
//     document.body.style.backgroundColor = "red";
// }) 

// const bluee = document.getElementById('blue');
// bluee.addEventListener('click', () => {
//     document.body.style.backgroundColor = "blue";
// }) 

// const greeen = document.getElementById('green');
// greeen.addEventListener('click', () => {
//     document.body.style.backgroundColor = "green";
// }) 

// const pinkk = document.getElementById('pink');
// pinkk.addEventListener('click', () => {
//     document.body.style.backgroundColor = "pink";
// }) 

// const orangee = document.getElementById('orange');
// orangee.addEventListener('click', () => {
//     document.body.style.backgroundColor = "orange";
// }) 


// 2.
// const parents = document.getElementById("parent");
// for(let childs of parents.children) {
//     childs.addEventListener('click', () => {
//         document.body.style.backgroundColor = childs.id;
//     })
// }


// 3.
// const parents = document.getElementById('parent');
// // console.log(parents.children);
// parents.addEventListener('click', (e) => {
//     // console.log(e.target);
//     const childs = e.target;
//     // const body = document.querySelector('body');
//     // body.style.backgroundColor = childs.id; 
//     document.body.style.backgroundColor = childs.id;
// })


const parents = document.getElementById('parent');
parents.addEventListener('click', (e) => {
    const childs = e.target;
    document.body.style.backgroundColor = childs.id;
})