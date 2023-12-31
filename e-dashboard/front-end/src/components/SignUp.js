import React, { useState } from "react";

const SignUp=()=>{

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const collectData = ()=>{
        console.warn(name, email, password)
    }
    

    return(
        <div className="register">
            <h1>Register</h1>
            <input className="inputBox" type= 'text' placeholder="Name"
            value={name} onChange={(e)=>setName(e.target.value)}
            />
            <input className="inputBox" type= 'email' placeholder="Email ID"
            value={email} onChange={(e)=>setEmail(e.target.value)}
            />
            <input className="inputBox" type= 'password' placeholder="Password"
            value={password} onChange={(e)=>setPassword(e.target.value)}
            />
            <button onClick={collectData} className="appButton" type="button">SignUp</button>

        </div>
    )
}

export default SignUp;