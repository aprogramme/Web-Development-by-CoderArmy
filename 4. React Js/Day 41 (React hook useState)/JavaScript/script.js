
let count = 0;

const para = document.createElement('p');
para.textContent = `Counter : ${count}`

const button = document.createElement('button');
button.textContent = `Increment ${count}`;

const root = document.getElementById('root');
root.append(para, button)

button.addEventListener('click', () => {
    count++;
    para.textContent = `Counter : ${count}`;
    button.textContent = `Increment ${count}`;
})

