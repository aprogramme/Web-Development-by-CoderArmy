
let count = 0;

function render() {
    document.getElementById('root').innerHTML = `
    <p>This is the counter for JavaScript App <p/>
    <h1>Counter: ${count}</h1>
    <button onclick="increase()">Increase</button>
    <button onclick="decrease()">Decrease</button>
    `;
}

function increase() {
    count++;
    render();
}

function decrease() {
    count--;
    render();
}

render();