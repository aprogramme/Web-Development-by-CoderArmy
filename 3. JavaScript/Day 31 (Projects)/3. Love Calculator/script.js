const form = document.querySelector('form');

form.addEventListener('submit', (e) => {

    e.preventDefault();  // prevent from refreshing the page

    const Boy = document.getElementById("boy");
    const Girl = document.getElementById("girl");

    // catch the value enter by user
    const v1 = Boy.value.length; 
    const v2 = Girl.value.length;

    const result = Math.pow(v1+v2, 2)%101;

    const res = document.querySelector('h2');
    res.textContent = `Result : ${result}%`;

    form.reset();  // reset the value entered in form

})