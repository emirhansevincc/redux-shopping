import React from 'react'
import { useSelector } from "react-redux"

function Navbar() {

  const { itemsList } = useSelector((state) => state.cart)

  return (
    <div className='navbar'>
        <div><h2>Store</h2></div>
        <div>
          <h2>Your Basket : {itemsList.length}</h2>
        </div>
    </div>
  )
}

export default Navbar