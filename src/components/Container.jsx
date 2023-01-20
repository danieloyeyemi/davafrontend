import React from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from './Navbar'
import Footer from './Footer'

function Container({ dynimage }) {
    const navigate = useNavigate()

    return (
        <>

            <div className="mySlides fade w-75">
                <img src={dynimage} className="all" />
                <div className="innertext"></div>

            </div>

        </>
    )
}

export default Container