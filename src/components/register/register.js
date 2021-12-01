import React, {useState} from 'react'
import './register.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Register() {
    const [ user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        place:""

    })
    const handleChange = e => {
        console.log(e.target);
        const { name, value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const register = () =>{
        const { name, email,password, place} = user
        axios.post("http://localhost:9002/register",user)
        .then(res => 
            {alert ("Registered successfully....!!!")
                console.log(res)
            })
    }
    return (
        <div className="register">
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Enter your name" onChange={handleChange}></input>
        <input type="text" name="email" value={user.email} placeholder="Enter Email"  onChange={handleChange}></input>
        <input type="password" name="password" value= {user.password} placeholder="Enter your password"  onChange={handleChange}></input>
        <input type="text" name="place" value={user.place} placeholder="Enter your place"  onChange={handleChange}></input>
        
        <div className="button" onClick={register} >Register</div>
        <Link to="/">Back</Link>
    </div>
    )
}

export default Register
