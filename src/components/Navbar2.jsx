import React from 'react'
import { Routes, Route, useNavigate, Router } from "react-router-dom"
import { Link } from "react-router-dom"
import usericon from "../images/userr.png"
import usercart from "../images/cart.png"
import logout from "../images/logout.png"

function Navbar2() {
    const navigate = useNavigate()

    const openNav = () => {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    const closeNav = () => {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
    const logoutt = () => {
        navigate('/')
        var reply = window.confirm("Warning:: You are going to be logged out!")
        if (localStorage.token && reply == true) {
            // window.location.reload()
            localStorage.removeItem('token')
            alert("Logged out successfully")
        }
        else if (localStorage.getItem("token") === null) {
            alert("You are not logged in.")
        }

        else {
            alert("Thank you for staying back.")
        }

    }
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-dark navbar-light">
                <div class="container-fluid bg-dark">
                    <p className='navbar-brand px-md-5 mx-md-5 mt-3 bg-dark '><Link className='text-decoration-none text-light bg-dark' to="/">HOME</Link></p>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-dark" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item bg-dark">
                                <p className="nav-link mt-3 mx-5 bg-dark" aria-current="page"><Link className='text-decoration-none text-light bg-dark' to="/mp">GOODS</Link></p>
                            </li>
                            <li class="nav-item bg-dark">
                                <p class="nav-link mt-3 bg-dark" ><Link className='text-decoration-none text-light bg-dark' to="/contact">CONTACT US</Link></p>
                            </li>
                            
                        </ul>
                        <Link to="/cart"><img src={usercart} alt="" className="resize mx-5" /></Link>
                        <Link className="text-decoration-none bg-danger" to=""><span className="btn-outline-success bg-danger" onClick={logoutt}><img src={logout} alt="" className="resize2" />Logout</span></Link>
                    </div>
                </div>
            </nav>
        </>
    )
  
}

export default Navbar2