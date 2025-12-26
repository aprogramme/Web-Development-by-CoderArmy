import { useEffect, useState } from "react";


// function App() {

//   const [user, setUser] = useState([]); 

//   async function GithubProfile() {
//     const response = await fetch("https://api.github.com/users");
//     const data = await response.json();
//     // console.log(data);
//     setUser(data);
//     console.log("hello")
//   }

//   GithubProfile();  // This will cause infinite re-renders

//   return (
//     <>
//     <h1>Github User</h1>
//     <div style={{display:"flex", justifyContent:"center", gap:"20px", flexWrap:"wrap" }}>
//       {
//         user.map(user =>(
//           <img src={user.avatar_url} height={"100px"} width={"100px"} />
//         ))
//       }
//     </div>
//     </>
//   )
// }

// --------------------------------------------------------------

// function App() {

//   const [user, setUser] = useState([]); 

//   // execute at last 
//   useEffect(() => {
//     async function GithubProfile() {
//       const response = await fetch("https://api.github.com/users");
//       const data = await response.json();
//       setUser(data);
//       console.log("hello")
//     }

//     GithubProfile();
//   }, []); // Empty dependency array to run only once on mount

//   return (
//     <>
//     <h1>Github User</h1>
//     <div style={{display:"flex", justifyContent:"center", gap:"20px", flexWrap:"wrap" }}>
//       {
//         user.map(user =>(
//           <img src={user.avatar_url} height={"100px"} width={"100px"} key={user.login} />
//         ))
//       }
//     </div>
//     </>
//   )
// }

// --------------------------------------------------------------

// function App() {

//   const [user, setUser] = useState([]);
//   // const [name, setName] = useState();

//   // execute at last 
//   useEffect(() => {
//     async function GithubProfile() {
//       const response = await fetch("https://api.github.com/users");
//       const data = await response.json();
//       setUser(data);
//       console.log("hello")
//     }

//     GithubProfile();
//   }, []); // Empty dependency array to run only once on mount

//   // function handleChange(e) {
//   //   // console.log(e.target.value);
//   //   setName(e.target.value.toUpperCase());
//   // }

//   return (
//     <>
//     <h1>Github User</h1>
//     {/* <input type="text" value={name} onChange={handleChange} /> */}
//     <div style={{display:"flex", justifyContent:"center", gap:"20px", flexWrap:"wrap" }}>
//       {
//         user.map(user =>(
//           <img src={user.avatar_url} height={"100px"} width={"100px"} key={user.login} />
//         ))
//       }
//     </div>
//     </>
//   )
// }

// --------------------------------------------------------------

function App() {

  const [user, setUser] = useState([]);
  // const [name, setName] = useState();
  const [count, setCount] = useState(30);

  // execute at last 
  useEffect(() => {
    async function GithubProfile() {
      const response = await fetch(`https://api.github.com/users?per_page=${count}`);
      const data = await response.json();
      setUser(data);
      console.log("hello")
    }

    GithubProfile();
  }, [count]); // Dependency array with 'count' to re-run effect when 'count' changes

  // function handleChange(e) {
  //   setName(e.target.value);
  // }

  return (
    <>
    <h1>Github User</h1>
    <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
    <div style={{display:"flex", justifyContent:"center", gap:"20px", flexWrap:"wrap" }}>
      {
        user.map(user =>(
          <img src={user.avatar_url} height={"100px"} width={"100px"} key={user.login} />
        ))
      }
    </div>
    </>
  )
}




export default App;