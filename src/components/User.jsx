import React from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from 'axios'
import Each from "./Each"
import { useEffect, useState } from "react"
import Navbar from './Navbar'
import Footer from './Footer'
const url = "https://davaserver.onrender.com/all"

function User() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setmessage] = useState('Welcome to Davana. Sign up!')
    const navigate = useNavigate('')
  
    const signUserUp = () => {
      if (firstname == "" || lastname == "" || email == "" || username == "" || password == "") {
        setmessage("Fill all fields")
      }
      else {
        let userDetails = {
          firstname, lastname, email, username, password
        }
        console.log(userDetails)
        axios.post('https://davaserver.onrender.com/signup', (userDetails)).then((response) => {
          // alert(response.data.message)
          console.log(response.data.text)
          if (response.data.text == "yes") {
            navigate('/userlogin')
            localStorage.removeItem('token')
          }
          else {
            setFirstname('')
            setEmail('')
            setPassword('')
            setLastname('')
            setUsername('')
            setmessage(response.data.message)
          }
        })
      }
  
    }
    return (
      <>
        <Navbar />
        <div className="section container-fluid">
          <div className="row justify-content-center bg-primary">
        <center>
          {/* <h1>
            <span className="userswelcometext"><i>Welcome, alread have an account click to</i> <Link className="text-decoration-none" to="/userlogin">Login</Link></span>
          </h1> */}
        </center>
                <div className="alert text-success"><h3>{message}</h3></div>
            <div className="col-md-6 bg-primary">
              <div className="checkout-form w-75 mx-auto bg-primary">
                <div className="checkout-field bg-primary">
                  <label className="bg-primary">First Name</label>
                  <input type="text" placeholder="First Name" name="firstname" onChange={e => setFirstname(e.target.value)} value={firstname} />
                </div>
                <div className="checkout-field bg-primary">
                  <label className="bg-primary">Last Name</label>
                  <input type="text" placeholder="Last Name" name="lastname" onChange={e => setLastname(e.target.value)} value={lastname} />
                </div>
                <div className="checkout-field bg-primary">
                  <label className="bg-primary">Email</label>
                  <input type="text" placeholder="Email address" name="email" onChange={e => setEmail(e.target.value)} value={email} />
                </div>
                <div className="checkout-field bg-primary">
                  <label className="bg-primary">Username</label>
                  <input type="text" placeholder="Username" name="username" onChange={e => setUsername(e.target.value)} value={username} />
                </div>
                <div className="checkout-field bg-primary">
                  <label className="bg-primary">Password</label>
                  <input type="password" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)} value={password} />
                </div>
                <button className="paystack-button" onClick={signUserUp}>Get started</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
}

export default User