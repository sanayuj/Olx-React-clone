import React, { useState } from 'react';
import {auth} from '../../Firebase/config'
import Logo from '../../olx-logo.png';
import {useNavigate,Link} from 'react-router-dom'
import './Login.css';

function Login() {
  const[email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate()
  function handleSubmit(e){
    e.preventDefault()
    auth.signInWithEmailAndPassword(email,password).then(()=>{
     navigate("/")
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <div>
        {<Link to="/signup"><span  className='signup'>Signup</span> </Link>}
        </div>
      </div>
    </div>
  );
}

export default Login;
