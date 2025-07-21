import React, { useState } from 'react'

const Login = () => {
    const [formData,setFormdata] = useState({
        email:"",
        password:""
    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
        setFormdata({
            email:"",
            password:""
        })
    }
    const handleChange = (e)=>{
        setFormdata((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
  return (
    <div>
        <form>
            <h1>Login</h1>
            <label>Email: </label>
            <input type="email" placeholder='Enter the email' name='email' value={formData.email} onChange={handleChange} />
            <br /><br />
            <label htmlFor="password">Password :</label>
            <input type="password" placeholder='Enter the password' name='password' value={formData.password} onChange={handleChange}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}

export default Login