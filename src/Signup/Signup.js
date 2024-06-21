import React,{useState} from 'react'
import './Signup.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


export default function Signup() {
    console.log(process.env.REACT_APP_BACKEND_URL)
    const navigate = useNavigate()
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[mobile,setMobile]=useState('')
    function handleSignup(e){
        e.preventDefault()
        const newUser = {name,password,email,mobile}
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/register`,newUser)
        .then((res)=>{
            console.log(res)
            if(res.status===201)
                navigate('/login')
        })
        .catch((error)=>{
            console.log(error)
        })

    }
    return (
    <div className = 'signup-container'>
        <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className = "form-group">
            <label>Enter your username</label>
        <input
            value = {name}
            placeholder = "enter your name"
            onChange ={(e)=>setName(e.target.value)}
            required/>
        </div>
        <div className = "form-group">
            <label>enter your email</label>
        <input
            value = {email}
            placeholder = "enter your email"
            onChange={(e)=>setEmail(e.target.value)}
            required
        />

        </div>
        <div className = "form-group">
            <label>enter your password</label>
        <input
            value = {password}
            placeholder = "enter your password"
            onChange={(e)=>setPassword(e.target.value)}
            required
        />

        </div>
        <div className = "form-group">
            <label>enter phone no</label>
        <input
            value = {mobile}
            placeholder = "enter your mobile number"
            onChange={(e)=>setMobile(e.target.value)}
            required
        />

        </div>
        <button>Sign Up</button>






      </form>
    </div>
  )
}
