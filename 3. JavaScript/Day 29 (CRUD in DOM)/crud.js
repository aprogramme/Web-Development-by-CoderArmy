// console.log("Hello from crud.js!");

//1. Creating element --------------------------------------------------------------------
const newElement = document.createElement("h2");
// console.log(newElement);
newElement.textContent = "Strike is coming";
newElement.id = "second";
// console.log(newElement);
// selecting element 
const element = document.getElementById("first");
element.after(newElement);
// element.before(newElement);

// ----------------------------------------------------

const newElement1 = document.createElement("h3");
newElement1.textContent = "Christmas Coming Soon";
newElement1.id = "third";
newElement1.className = "christmas";

// newElement1.className = "holi";         // override christmas
// newElement1.className += " holi";       // not a best practice to assign class
newElement1.classList.add("christmas");    // use classList.add
newElement1.classList.add("diwali");    // use classList.add
// newElement1.classList.remove("diwali");    // use classList.add
// console.log(newElement1);

// selectig element 
const element1 = document.getElementById("second");
element1.after(newElement1);
// element1.before(newElement1);

// styling--------

newElement1.style.backgroundColor = "pink";
newElement1.style.color = "red";

// Attribute---------

console.log(newElement1.getAttribute("id"));       // get information
// newElement1.setAttribute("hello", "world");     // creating our own attribute
// console.log(newElement1.getAttribute("hello"));


// Creating list and insert -----------------------

// const list = document.createElement("li");
// list.textContent = "Milk";

// const list1 = document.createElement("li");
// list1.textContent = "Cake";

// const list2 = document.createElement("li");
// list2.textContent = "Bread";

// const list3 = document.createElement("li");
// list3.textContent = "Cheese";

// // Adding in unordered list 
// const unorderElement = document.getElementById("listing");  // selecting element
// // unorderElement.append(list);      // push at the end
// // unorderElement.append(list1);     // push at the end
// unorderElement.append(list, list1);

// unorderElement.prepend(list2);       // insert at the start

// // list.after(list3);     // placing after milk
// unorderElement.children[1].after(list3);


// How to add element form array to list------------------------

// const arr = ["Milk", "Cheese", "Bread", "Cake", "Tofu", "Tea"];
// const unorderElement = document.getElementById("listing");

// for(let food of arr) {
//     const list = document.createElement("li");
//     list.textContent = food;
//     unorderElement.append(list);
// }

// fragment : using fragment all element insert together, reduce browser time make fast
const arr = ["Milk", "Cheese", "Bread", "Cake", "Tofu", "Tea"];
const unorderElement = document.getElementById("listing");

const fragment = document.createDocumentFragment();
for(let food of arr) {
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list);
}
unorderElement.append(fragment);


//1. Deleting element --------------------------------------------------------------------

const s1 = document.getElementById("first");
s1.remove();


//Older Way -------------------------------------------

const mon = document.getElementById("month");
// console.log(mon.children);
// console.log(mon.childNodes);  

const lister = document.createElement("li");
lister.textContent = "May";

// mon.insertAdjacentElement("afterbegin", lister);
// mon.insertAdjacentElement("afterend", lister);
// mon.insertAdjacentElement("beforebegin", lister);
// mon.insertAdjacentElement("beforeend", lister);


// Why not using innerHTML ?
// lister.innerHTML = "<h2>Help</h2>";     // do not use innerHTML
lister.textContent = "<h2>Help</h2>";
mon.prepend(lister);