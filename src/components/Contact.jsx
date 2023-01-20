import { useState, useEffect, React } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import Effect from "./Effect"
import axios from 'axios'
import Navbar from './Navbar'
import Footer from './Footer'
import Navbar2 from './Navbar2'

function Contact() {
    const navigate = useNavigate()
    const token = localStorage.token;
    useEffect(() => {
      axios.get('https://davaserver.onrender.com/dashcheck', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
      ).then((response) => {
        console.log(response)
        if (localStorage.token) {
          if (response.data.message = 'verification successful') {
            console.log("its here")
          }
          else {
            console.log("it isnt")
            navigate('/userlogin')
          }
        }
        else {
          navigate('/userlogin')
          console.log('back')
        }
      })
    }, [])
    return (
      <div>
        <center>
          <Navbar2 />
        </center>
        <Effect />
        <center>
          <div className='con text-success'>
            <strong>+2348164776664</strong>
            <br />
            <i>danieloyeyemiisola@gmail.com</i>
          </div>
  
        </center>
       <div className="foo">
       <Footer />
       </div>
      </div>
    )
}

export default Contact