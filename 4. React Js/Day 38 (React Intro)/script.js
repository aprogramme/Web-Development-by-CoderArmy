
// create a h1 element using js
// const element1 = document.createElement('h1');
// element1.textContent = "Hello Coder Army";
// element1.className = 'ele1';
// element1.id = 'first';
// element1.style.fontSize = '30px';
// element1.style.backgroundColor = 'orange';
// element1.style.color = 'white';

// const element2 = document.createElement('h1');
// element2.textContent = "Strike is Coming";
// element2.className = 'ele1';
// element2.id = 'second';
// element2.style.fontSize = '30px';
// element2.style.backgroundColor = 'pink';
// element2.style.color = 'red';

// const root = document.getElementById('root')
// root.append(element1); 
// root.append(element2); 

// -------------------------------------------------------------------

// attributes = {
//     className:"ele1",
//     id:"first",
//     style:{               // style is read-only property
//         fontSize:"30px",
//         backgroundColor:"pink",
//         color:"white"
//     }
// }

// element = {
//     tag:"h1",
//     textContent:"Hello Coder Army",
//     className:"ele1",
//     id:"first",
//     style:    not directly copy here from attributes, to copy we use object.assign
// }

// function createElement(tag, attributes, children) {
//     const element = document.createElement(tag);
//     element.textContent = children;

//     for(const key in attributes) {
//         if(key == 'style') {
//             Object.assign(element.style, attributes.style);  // to implement styling use object.assign which copy the property of one object to other object
//         }
//         else {
//             element[key]  = attributes[key];
//         }
//     }

//     return element;
// }

// const element1 = createElement("h1",{className:"ele1", id:"first", style:{fontSize:"30px", backgroundColor:"pink", color:"green"}},"Hello Coder Army")
// const element2 = createElement("h2",{className:"ele2", id:"second", style:{fontSize:"20px", backgroundColor:"red", color:"white"}},"Strike Is Coming")

// const root = document.getElementById('root')
// root.append(element1);
// root.append(element2);

// -------------------------------------------------------------------
// React : It is a Js library/object in which various pre-build method is present
// custom React----

// const React = {
//     createElement: function(tag, attributes, children) {
//         const element = document.createElement(tag);
//         element.textContent = children;

//         for(const key in attributes) {
//             if(key == 'style') {
//                 Object.assign(element.style, attributes.style);  // to implement styling use object.assign which copy the property of one object to other object
//             }
//             else {
//                 element[key]  = attributes[key];
//             }
//         }

//         return element;
//     }
// }

// const ReactDOM = {
//     render : function(child, parent) {
//         parent.append(child);
//     }
// }

// const element1 = React.createElement("h1",{className:"ele1", id:"first", style:{fontSize:"30px", backgroundColor:"pink", color:"green"}},"Hello Coder Army")
// const element2 = React.createElement("h2",{className:"ele2", id:"second", style:{fontSize:"20px", backgroundColor:"red", color:"white"}},"Strike Is Coming")

// console.log(element1);

// const root = document.getElementById('root')
// root.append(element1);
// root.append(element2);

// ReactDOM.render(element1, root); // it replace the children present in root
// ReactDOM.render(element2, root);

// NOTE:----
// 1. React : It is a Js library/object in which various pre-build method is present
// 2. to implement styling use object.assign which copy the property of one object to other object
// 3. React job is only to describe what the UI should look like, it doesn't create DOM elements.
// 4 ReactDOM is the renderer. It's job is to take the blueprint from React and actually build the UI for a specific plateform.


//       |----------> Web                  React use in different software like it use in window(react-Dom),
//       |                                 mobile app(react-native), pdf creation, etc, that's why react is not
// React -----------> React Native         used to create element, every software have its reactDom to
//       |                                 create elements.
//       |----------> react-pdf

// -------------------------------------------------------------------
// original react----

const React = {
    createElement(type, props, children) {
        return {
            type : type,
            props : {
                ...props,
                children : children
            }
        }
    }
}

// const reactElement = {
//     type:'h1',
//     props: {
//         className:"ele1",
//         id:"first",
//         style:{fontSize:"30px", backgroundColor:"pink", color:"green"},
//         children:"Hello Coder Army"
//     }
// }

const ReactDOM = {
    render : function(reactElement, root) {
        const element = document.createElement(reactElement.type);

        root.innerHTML = '';

        const {props} = reactElement;

        for(const key in props) {
            if(key === 'style') {
                Object.assign(element.style, props.style);
            }
            else if(key === 'children') {
                element.textContent = props[key];
            }
            else {
                element[key] = props[key];
            }
        }

        root.append(element);
    }
}

// const root = document.getElementById('root');

const element1 = React.createElement("h1",{className:"ele1", id:"first", style:{fontSize:"30px", backgroundColor:"pink", color:"green"}},"Hello Coder Army")
const element2 = React.createElement("h2",{className:"ele2", id:"second", style:{fontSize:"20px", backgroundColor:"green", color:"white"}},"Strike Is Coming")
// console.log(element1);

// ReactDOM.render(element1, document.getElementById('root'));
// ReactDOM.render(element2, document.getElementById('root'));

const div = React.createElement('div', null, element1, element2);  // both show on the screen together
// console.log(div); 
// ReactDOM.render(div, document.getElementById('root'));  // old version
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);