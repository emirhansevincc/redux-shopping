import React from 'react'
import { useSelector } from "react-redux"

import productData from '../../productData'

import { useDispatch } from "react-redux"
import {
    addItem,
    removeItem,
    filterItems
} from '../../redux/cartSlice/cartSlice'

import "./basket.css"

function BasketList() {

    const { itemsList } = useSelector((state) => state.cart)

    const dispatch = useDispatch()

    const handleUp = (id) => {
        const findItem = productData.find((product) => product.id === id)
        dispatch(addItem(findItem))
    }

    const handleDown = (id) => {
        const findItem = productData.find((product) => product.id === id)
        dispatch(removeItem(findItem))
    }

    const filterItem = (id) => {
        const findItem = productData.find((product) => product.id === id)
        dispatch(filterItems(findItem.id))
    }

    let totalMoney = 0
    itemsList.forEach(element => {
        totalMoney += element.totalPrice
    });

    return (
        <div className='card-container'>
            <h1 className='basket-title'>- Basket -</h1>
            {
                itemsList.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="card">

                                <h2 className='common'>{item.title}</h2>
                                <div className="price-amount">
                                    <h2 className='common'>
                                        ${item.totalPrice.toFixed(2)}
                                    </h2>
                                    <div className="amount">
                                        <button onClick={() => handleUp(item.id)}>
                                            <i className="fa-solid fa-chevron-up"></i>
                                        </button>
                                        <p>{item.amount}</p>
                                        <button
                                            onClick={() => handleDown(item.id)}
                                            disabled={item.amount < 1}
                                        >
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </button>
                                    </div>
                                    <div className="trash">
                                        <button
                                            onClick={() => { filterItem(item.id) }}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
            <div className="total">
                <h2>Total : ${totalMoney}</h2>
            </div>
        </div>
    )
}

export default BasketList