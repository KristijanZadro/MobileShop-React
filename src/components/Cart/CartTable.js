import React from 'react'
import './Cart.css'
//components
import CartList from './CartList'

export default function CartTable() {
        return (
            <div className="cart-table">
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Count</th>
                            <th>Delete</th>
                            <th>Total</th>
                        </tr>

                    </thead>
                    
                    <CartList />
                    
                </table>
            
            </div>
        )
}

