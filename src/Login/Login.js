import React,{useState} from 'react'
import axios from 'axios'
import './Login.css'
import {useNavigate} from 'react-router-dom'
import swal from 'sweetalert2'

export default function Login() {
  const navigate = useNavigate()
  const[userName,setUserName]=useState('')
  const[password,setPassword]=useState('')

  async function login(){
    const newUser = {email:userName,password}
    const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`,newUser)
    if(response.status === 200){
      localStorage.setItem('userId',response.data.userId)
      localStorage.setItem('userRole',response.data.role)
      swal.fire({
        icon:'success',
        text:'Success',
        title:'you logged account successfully'
      });

      navigate('/')
    }else{
      swal.fire({
        icon:'error',
        text:'Error Occured',
        title:'invalid username or password'
      });
    }

  }

  return (
    <div className = 'login-container'>
      <h2>Login</h2>
      <div className ='form-group'>
        <label>Email:</label>
        <input 
            value = {userName}
            onChange={(e)=>setUserName(e.target.value)}/>
      </div>
      <div className ='form-group'>
        <label>Password:</label>
        <input 
            value = {password}
            onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <button onClick={login}>submit</button>
     
    </div>
  )
}
