import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import {TiShoppingCart} from 'react-icons/ti'

export default function Navbar() {
    return (
        <div className="navbar">
            <Link to="/" style={{textDecoration: 'none'}}>
                <div className="title">
                    <h2>Mobile Shop</h2>
                </div>
            </Link>
            <Link to="/cart" style={{textDecoration: 'none'}}>
                <button className="my-cart-icon">
                    <TiShoppingCart />
                    my cart
                </button>
            </Link>

        </div>
    )
}
