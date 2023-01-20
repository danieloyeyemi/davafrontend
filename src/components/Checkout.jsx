import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import Item from "./Items"
import { useState } from 'react'
import { changename, changeamount } from '../actions/change'

import { useSelector, useDispatch } from "react-redux"
import { PaystackButton } from 'react-paystack'

function Checkout() {
  const token = localStorage.token;
  const [Items, setItems] = useState([])
  const [sumofmoney, setSumofmoney] = useState(0)
  const [numberOfGoods, setNumberOfGoods] = useState(0)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const amount = useSelector((state) => {
    return state.amount
  })
  const name = useSelector((state) => {
    return state.name
  })
  const openup = () => {
    dispatch(changeamount(0))
    axios.post('https://davaserver.onrender.com/remove/', { name }).then((response) => {
      alert("Thanks for doing business with us! Your order has been confirmed and cart cleared successfully. Come back soon!!")
    }
    )
    navigate('/cart')
  }

  const publicKey = 'pk_test_d41330a74628ffd6b73e333e1aae46b4226fe040'
  const [email, setEmail] = useState("")
  // const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      openup(),
    onClose: () => alert("Wait! You need to use these items, anyhow, any time soon, don't go!!!!"),
  }
  return (
    <>
      {/* <Navbar /> */}
      <div className='col-3 mx-auto mt-5'>

        <div className="checkout-form ">
          <div className="checkout-field">
            <label>Name</label>
            <input
              type="text"
              id="name"

              value={name}
              disabled />
          </div>
          <div className="checkout-field">
            <label>Amount</label>
            <input
              type="text"
              id="amount"
              value={amount / 100}
              disabled
            />
          </div>
          <div className="checkout-field">
            <label>Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="checkout-field">
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <PaystackButton className="paystack-button" {...componentProps} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Checkout