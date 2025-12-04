const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();  // prevent from page load

    const income = document.querySelector("#income");
    const amount = parseInt(income.value);  // input come in string form we have to convert to integer

    const result = document.querySelector('h2');
    let totalTax = 0;

    if(amount <= 1200000)
        totalTax = 0;
    else if(amount <= 1600000)
        totalTax = (amount - 1200000)*0.15;
    else if(amount <= 2000000)
        totalTax = (amount - 1600000)*0.20 + 60000;
    else if(amount <= 2400000)
        totalTax = (amount - 2000000)*0.25 + 80000 + 60000;
    else
        totalTax = (amount - 2400000)*0.30 + 100000 + 80000 + 60000

    result.textContent = `Total Tax : ${totalTax}`;

    form.reset();  // use to reset the form value
})