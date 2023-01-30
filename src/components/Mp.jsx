import React from 'react'
import {Routes, Route, useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
import axios from 'axios'
import Each from "./Each"
import {useEffect, useState} from "react"
import{useDispatch} from 'react-redux'
import {changename} from '../actions/change'
import Navbar from './Navbar'
import Footer from './Footer'
import Navbar2 from './Navbar2'

const url="https://davaserver.onrender.com/all"

function Mp() {
    const navigate= useNavigate()
    const [Allitems, setAllitems]= useState([])
    const token = localStorage.token;
    
    const dispatch = useDispatch();
  
    useEffect(() => {
      axios.get('https://davaserver.onrender.com/dashcheck',{
        headers:{
         'Authorization':`Bearer ${token}`,
         'Content-Type':'application/json',
         'Accept':'application/json'
        }
    }
    ).then((response)=>{
        console.log(response)
  
          if(localStorage.token&&response.data.message=='verification successful'){
              console.log("its here")
              dispatch(changename(response.data.username))
              axios.get(url).then((response, err)=>{
              if (err){
                console.log(err.message)
              }
              else{
                setAllitems(response.data.result)
              }
            })
          }
            else{
              console.log("it isnt")
              navigate('/userlogin')
              }
      })
      }, [])
              return (
                  <>
                  <Navbar2/>
                   {/* <center><Link className='text-decoration-none' to="/userlogin">Login</Link> to continue</center> */}
                  <div className="flexitems ">
                  {Allitems.map((val, i) => (
                    <div key={i}>
                      <Each theimg={val.imgofgood} amount={val.amountinnaira} quantity={val.numberavailable} name={val.nameofgood} desc={val.imgdesc}/>
                    </div>
                  ))}
              {/* <Each theimg={Allitems.imgofgood} amount="" quantity="" name="" desc=""/> */}
                  </div>
                  <Footer/>
                  </>
              )
}

export default Mp