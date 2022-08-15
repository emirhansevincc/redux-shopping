import React from 'react'
import "./product.css"
import { useDispatch } from "react-redux"
import { addItem } from '../../redux/cartSlice/cartSlice'
import productData from "../../productData"

function ProductsPage({ setProduct, product }) {

    const dispatch = useDispatch()

    const handleClick = (id) => {
        const findItem = productData.find((product) => product.id === id)
        dispatch(addItem(findItem))
    }

    return (
        <div className='item-main-container'>
            {
                productData.map((item, key) => {
                    return (
                        <div key={key}>
                            <div className="item">
                                <div className="item-img">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        width={180}
                                        height={200}
                                    />
                                </div>
                                <div className="item-title common">
                                    <h2>{item.title}</h2>
                                </div>
                                <div className="item-price common">
                                    <h3>${item.price}</h3>
                                </div>
                                <div className="item-category common">
                                    <p>{item.category}</p>
                                </div>
                                <button
                                    onClick={() => handleClick(item.id)}
                                >Add to Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductsPage