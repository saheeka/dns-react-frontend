import React,{useState} from 'react'
import "./login.css"
import axios from 'axios'

import {useNavigate} from 'react-router-dom'


function Login() {
const navigate=useNavigate()
    const [ user, setUser] = useState({
        
        email:"",
        password:""
        

    })
    const handleChange = e => {
        console.log(e.target);
        const { name, value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const login =() =>{

        axios.post("http://localhost:9002/login",user)
        .then(res =>{
            if(user.email===res.data.user.email && user.password===res.data.user.password)
            {alert("login successfull")
                navigate("/productlist")
            }
            else{
            alert("invalid")
            }
            console.log(res.data.user)
        })
        
        
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password}  placeholder="Enter your password" onChange={handleChange}></input>
            <div className="button" onClick={login}>Login</div>
            <div className="button"  onClick={()=>navigate("/register")}>Register</div>
        </div>
    )
}

export default Login
