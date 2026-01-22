import { useRef, useState } from "react";


function Login() {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const emailRef = useRef(null);
    const passRef = useRef(null);

    console.log("render");

    function handleSubmit(e) {
        e.preventDefault();

        // console.log(email);
        // console.log(password);

        // console.log(emailRef);
        // console.log(emailRef.current);
        console.log(emailRef.current.value);

        // console.log(passRef);
        // console.log(passRef.current);
        console.log(passRef.current.value);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            {/* <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> */}

            <input type="email" ref={emailRef} />
            <input type="password" ref={passRef} />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Login;