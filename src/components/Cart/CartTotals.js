import React from 'react'
import './Cart.css'
import {ProductConsumer} from '../../context'
import {Link} from 'react-router-dom'

export default function CartTotals() {
    return (
        <ProductConsumer>
            {
                value => {
                    const {cartSubTotal,cartTax,cartTotal,clearCart} = value
                    return(
                        <div className="cart-totals">
                            <Link to='/'>
                                <button
                                    className="clear-cart"
                                    onClick={()=> clearCart()}
                                >
                                    clear cart
                                </button>
                            </Link>
                            <h4>
                                <span>subtotal:</span><strong> ${cartSubTotal}</strong>
                            </h4>
                            <h4>
                                <span>tax:</span><strong> ${cartTax}</strong>
                            </h4>
                            <h4>
                                <span>total:</span><strong> ${cartTotal}</strong>
                            </h4>
                            
                        </div>
                    )
                }
            }
        </ProductConsumer> 
        
    )
}
