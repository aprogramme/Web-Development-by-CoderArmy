// const div = document.querySelector('div');
// let time = new Date();
// // console.log(time);
// // console.log(time.toLocaleString());
// // console.log(time.toLocaleTimeString());

// div.textContent = time.toLocaleTimeString();


const div = document.querySelector('div');
setInterval(() => {
    let time = new Date();
    div.textContent = time.toLocaleTimeString();
}, 1000) 