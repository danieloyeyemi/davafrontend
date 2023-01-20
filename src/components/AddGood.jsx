import React from 'react'
import axios from 'axios'
import {useEffect, useState} from "react"
import {Routes, Route, useNavigate , Router} from "react-router-dom"
import Navbar from './Navbar'
import Footer from './Footer'

function AddGood() {
    const navigate= useNavigate()
    const token = localStorage.token;
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
              navigate('/addgood')
          }
            else{
              console.log("it isnt")
              navigate('/userlogin')
              }
      })
      }, [])
    const [Inputb, setInputb] = useState('')
    const [Inputc, setInputc] = useState('')
    const [Inputd, setInputd] = useState('')
    const [Inpute, setInpute] = useState('')
    const [myfile, setmyfile] = useState('')

    const pickFile = (e) => {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload= ()=>{
        const result = reader.result
        setmyfile(result)
      }
    }
    const addgood=()=>{
             const data= new FormData()
              var nameofgood= Inputb
              var amountinnaira= Inputc
              var numberavailable = Inputd
              var imgdesc = Inpute
            axios.post('https://davaserver.onrender.com/', {myfile,nameofgood,amountinnaira,numberavailable,imgdesc}).then((res)=>{
           alert("Added successfully")
              console.log(res)
              window.location.reload()
              // setInputb('')
              // setInputc('')
              // setInputd('')
              // setInpute('')
            })
        }

    return (
        <>
        <Navbar/>
        <div className='col-6 mx-auto mt-5'>

        <form id="formm" encType="multipart/form-data" className="col-7 mx-auto shadow-sm" method='POST' >
        <input type="file" className="form-control my-2 text-center" placeholder="Img of good" onChange={(e) => pickFile(e)}/>
        <input type="text" className="form-control my-2 text-center" placeholder="Name" name="nameofgood" onChange={e => setInputb(e.target.value)} value={Inputb}/>
        <input type="number"  className="form-control my-2 text-center" placeholder="Amount" name="amountinnaira" onChange={e => setInputc(e.target.value)} value={Inputc}/>
        <input type="number" className="form-control my-2 text-center" placeholder="Quantity" name="numberavailable" onChange={e => setInputd(e.target.value)} value={Inputd}/>
        <input type="text" className="form-control my-2 text-center" placeholder="Description" name="imgdesc" onChange={e => setInpute(e.target.value)} value={Inpute}/>
        </form>
        <button onClick={addgood} className="btn2">Add</button>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"/>
        
        </div>
        <Footer/>
        </>
    )
}

export default AddGood