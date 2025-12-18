// const element1 = React.createElement('h1', {id:'title1'}, "Hello Coder Army")
// const element2 = React.createElement('h2', {id:'title2'}, "Strike is Coming")

// const element3 = React.createElement('div', null, 
//     React.createElement('h2', null, "Hello"), 
//     React.createElement('h2', null, "Coder"));

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(element1);

// ---------------------------------------------------------------------------------------
// JSX : JavaScript XML : Look Like HTML
// Babel : convert JSX to React.createElement()
// JSX --> React.createElement() --> React Element(Js Object) --> Real DOM(HTML Element)
//     babel                    React                       ReactDOM

// this syntax is in JSX, browser can't understand, to make runnable we use Babel
// const element1 = React.createElement('h1', {id:'title1'}, "Hello Coder Army") ---> const element1 = <h1 id="first">Hello Coder Army</h1>;

// const root = ReactDOM.createRoot(document.getElementById('root'));

// const element1 = <h1 id="first" className="first">Hello Coder Army</h1>;
// root.render(element1);


// const element2 = (<div>
//     <h1>Hello</h1>
//     <h2>Coder</h2>
// </div>);
// root.render(element2);

// can't use like this, we have to wrap up the tags in div or something
// const element3 = {
//     <h1>hello Coder Army</h1>
//     <h2>hello Coder Army</h2>
// }


// ---------------------------------------------------------------------------------------
// React Components : Function return JSX

// function App() {  // first letter of name must be capital

//     return (
//         <h1>Hello Coder Army</h1>   // return JSX
//     ); 
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(App());
// root.render(<h1>Hello Coder Army</h1>);
// root.render(<App/>);

// const a = App();
// root.render(a);

// -------------------------------------------
// function App(name) {  // first letter of name must be capital

//     return (
//         <h1>Hello Coder Army {name}</h1>   // return JSX
//     ); 
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const a = App("Aayush");
// root.render(a);

// -------------------------------------------

// text/element : JavaScript ka expression app iske andar likh sakte h
// Number--
// const element = <h1>Hello Coder {10+10}</h1>
// string--
// const element = <h1>Hello Coder {"Aayush"}</h1>
// boolean--
// const element = <h1>Hello Coder {true}</h1>
// const element = <h1>Hello Coder {false}</h1>
// null--
// const element = <h1>Hello Coder {null}</h1>
// undefined--
// const element = <h1>Hello Coder {undefined}</h1>
// array--
// const element = <h1>Hello Coder {[10, 20, 30]}</h1>
// object--
// const element = <h1>Hello Coder {{name:"Aayush", age:"20"}}</h1> // error

// Number, string, array : render and display on screen
// boolean, null, undefined : render but not display on screen
// object : Error

// const age = 20;
// const element = <h1>Hello Coder {age>18?"Adult":"Kid"}</h1> // valid
// const element = <h1>Hello Coder {<h2>Army</h2>}</h1> // valid

// const isLoggedIn = true;
// const element = <h1>Hello Coder {isLoggedIn?<h2>Logged In</h2>:<h2>Kidly SignIn</h2>}</h1>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

// ----------------------------------------------------------------------

// const courses = ["HTML", "CSS", "JavaScript", "React"];
// // const element = <ul>{courses}</ul>

// const element = (
//     <ul>
//         {/* {[<li>HTML</li>, <li>CSS</li>, <li>JavaScript</li>, <li>React</li>]} */}
//         {courses.map(course => <li>{course}</li>)}
//     </ul>
// )

// const ab = {backgroundColor:"orange", color:"white"}
// const element = <h1 id="title" className="first" style={ab}>Hello Coder Army</h1>
// function App(props) {
//     return (
//         <h1>Hello Coder Army{props.name} {props.age}</h1>
//     )
// }

// {
//     name:"Aayush",
//     age:30
// }
// const element = <App name="Aayush" age={20}></App> // props convert argument into object and give to function as parameter

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);


// ---------------------------------------------------------------------------------------
// Project
// props convert argument into object and give to function as parameter

function Header({name}) {
    return (
        <h1>{name} welcome to Indian Election Commission</h1>
    )
}

function Main({user}) {
    return (
        <>
        <h2>Hi {user.name}</h2>
        <h3>{user.age>18? "You are eligible for vote": "You are not eligible for vote"}</h3>
        <p>Your city is {user.city}</p>
        </>
    )
}

function Footer() {
    return (
        <h3>Thanks For visiting our website</h3>
    )
}

function App() {
    return(
        <>
        <Header name="Aayush"></Header>
        <Main user={{name:"Aayush", age:30, city:"Noida"}}></Main>
        <Footer></Footer>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);