import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    const cartSelector = useSelector((state) => state.cart.items) //for items value
    // console.log(cartSelector.length);
     
  return (
    <>
      <div className='flex justify-between'>
        <div className='font-bold text-3xl'><Link to="/">Header</Link></div>
        <div className='font-bold text-2xl'><Link to="/cartlist">Cart {cartSelector.length ? cartSelector.length : 0}</Link></div>
      </div>
    </>
  )
}

export default Header
