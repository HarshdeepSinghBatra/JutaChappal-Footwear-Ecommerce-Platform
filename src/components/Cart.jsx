import React from 'react'
import { BsTrash } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Cart = ({ isScrolled, cartItems, setCartItems }) => { 

    const deletCartItem = async (id) => {
        try {
            const res = await axios.delete(`/api/cart/deleteItem/${id}`)
        } catch (err) {
            console.log(err)
        }
    }

    const handleRemoveCartItem = cartItem => {
        deletCartItem(cartItem.id)
        setCartItems(cartItem)
    }

    const getTotalItemsCount = cartItems => (
        cartItems?.reduce((total, item) => total + item.quantity, 0)
    )

  return (
    <div className={`cart-container ${isScrolled && 'scrolled'}`}>
        <div className="cart-header">
            <p className="cart-header-quantity"> <span>{getTotalItemsCount(cartItems)}</span> {getTotalItemsCount(cartItems) > 1 ? "items" : "item"} in Cart </p>
            <p className="cart-header-price">Cart Subtotal: <span>Rs. {cartItems?.reduce((total, item) => total + item.cost, 0)}</span></p>
        </div>

        {cartItems?.map((cartItem, index) => (
            <div className="cart-item" key={index}>
                <div className="cart-image img-container">
                    <img src={cartItem.imageURL} alt="" />
                </div>
                <div className="cart-content">
                    <p className="cart-item-name">{cartItem.name}</p>
                    <p className="cart-item-size"> <span>Size:</span> {cartItem.size}</p>
                    <p className="cart-item-cost"> <span>Price:</span> Rs. {cartItem.cost}</p>
                    <p className="cart-item-quantity"><span>Qty:</span> {cartItem.quantity}</p>
                </div>
                <span className="cart-delete">
                    <BsTrash className='cart-icon' onClick={() => handleRemoveCartItem(cartItem)} />
                </span>
            </div>
        ))}

        {cartItems?.length === 0 ? (
            <p className="cart-empty">You have no items in your shopping cart</p>
        ) : <Link to="#" className="cart-modal-button btn-submit">PROCEED TO CHECKOUT</Link>}
        
        
    </div>
  )
}

export default Cart