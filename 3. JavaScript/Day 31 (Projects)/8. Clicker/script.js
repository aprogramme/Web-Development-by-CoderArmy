const body = document.querySelector('body');

body.addEventListener('click', (e) => {
    console.log(e.clientX, e.clientY);

    const circleElement = document.createElement('div');
    circleElement.classList.add('circle');
    // circleElement.textContent = "HI";
    const language = ["Hi", "Hola", "Salut", "Hallo", "Ciao", "Olá", "Привет", "你好", "こんにちは", "안녕", "مرحبا", "नमस्ते", "হাই", "Merhaba", "Γεια", "Hoi", "Hej", "สวัสดี", "Xin chào", "Jambo"];
    const hi = Math.floor(Math.random()*language.length);
    const text = `${language[hi]}`;
    circleElement.textContent = text;

    const color = ['red', 'blue', 'orange', 'green', 'pink', 'purple', 'blueviolet', 'burlywood', 'darkcyan', 'darkgrey', 'bisque', 'darkmagenta', 'darkturquoise', 'fuchsia', 'darkorange', 'greenyellow', 'forestgreen', 'brown', 'darkviolet'];
    circleElement.style.backgroundColor = color[Math.floor(Math.random()*color.length)];

    // circleElement.style.top = `${e.clientY}px`;
    // circleElement.style.left = `${e.clientX}px`;
    circleElement.style.top = `${e.clientY-25}px`;
    circleElement.style.left = `${e.clientX-25}px`;

    body.append(circleElement);

    // removing cirlceElement from body
    setTimeout(() => {
        circleElement.remove();
    }, 5000);
})