import React, { component } from 'react'
import logo from './logo.svg';
import './App.css';
// import React from 'react'
import {useEffect, useState} from "react"
import axios from 'axios'
import Effect from "./components/Effect"
import usericon from"./images/userr.png"
import usercart from"./images/cart.png"
import {Routes, Route, useNavigate , Router} from "react-router-dom"
import {Link} from "react-router-dom"
import Mp from "./components/Mp"
import Home from "./components/Home"
import Each from "./components/Each"
import User from "./components/User"
import AddGood from "./components/AddGood"
import UserLogin from "./components/UserLogin"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import Navbar from"./components/Navbar"
import Navbar2 from './components/Navbar2';
import {increment} from './actions/increase'
import {useSelector, useDispatch} from "react-redux"
import Footer from "./components/Footer"
import Checkout from "./components/Checkout"
import { PaystackButton } from 'react-paystack'

// const log= require('logger-with-time')
// log()
function App() {
  const url="https://davaserver.onrender.com/all"
  const username = useSelector(state=>state.name)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const name = useSelector(state=> state.name)
  const count = useSelector(state=>state.count)
  return (
    <>    
          <Routes>
          <Route path="/" element={<Home/>}/>        
          <Route path="/mp" element={<Mp/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/user" element={<User/>}/>
          <Route path="/userlogin" element={<UserLogin/>}/>        
          <Route path="/item/*" element={<Each/>}/>
          <Route path="/addgood" element={<AddGood/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>             
          </Routes>
    </>
      );
    }
    export default App;
    

