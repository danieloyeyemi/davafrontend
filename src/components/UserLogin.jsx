import React from 'react'
import { Link } from "react-router-dom"
import { Routes, Route, useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { changename } from '../actions/change'
import axios from 'axios'
import Each from "./Each"
import { useEffect, useState } from "react"
import Navbar from './Navbar'
import Footer from './Footer'

function UserLogin() {
    const navigate = useNavigate()
    const dispatch = useDispatch();


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setmessage] = useState('Hi, please login!')
    const [message1, setmessage1] = useState('welcome to Davana')

    const logUserIn = () => {

        let loginDetails = {
            username, password
        }

        console.log(loginDetails)
        axios.post('https://davaserver.onrender.com/login', loginDetails).then((response) => {
            console.log(response)
            if (response.data.message == 'Your login is successful!') {
                let token = response.data.token
                localStorage.token = token
                navigate('/mp')
            } else {
                setmessage(response.data.message)
                setUsername('')
                setPassword('')
                localStorage.removeItem('token')
            }
        })
        // document.getElementById("formm").reset()
    }
    return (
        <>
            <Navbar />
            <div className="section container-fluid">
                <div className="row justify-content-center bg-primary">
                    <center><i className='text-muted'>Don't have an account! click on SignUp</i></center>
                    <center><i><Link className='text-decoration-none d-sm-none d-block text-light' to="/user"><button type="button" class="btn btn-primary">Signup</button></Link></i></center>
                    <div className="alert text-light"><h3>{message1}</h3></div>
                    <div className="col-md-6 bg-primary">
                        <div className="checkout-form w-100 mx-auto bg-primary">
                            <div className="alert"> {message} </div>
                            <div className="checkout-field bg-primary">
                                <label className="bg-primary">Username</label>
                                <input type="text" placeholder="Username" name="username" onChange={e => setUsername(e.target.value)} value={username} />
                            </div>
                            <div className="checkout-field bg-primary">
                                <label className="bg-primary">Password</label>
                                <input type="password" placeholder="Password" name="password" onChange={e => setPassword(e.target.value)} value={password} />
                            </div>
                            <button className="paystack-button" onClick={logUserIn}>Start Shopping</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UserLogin