import React from 'react'
import {ProductConsumer} from '../../context'
import './Cart.css'
//components
import CartProduct from './CartProduct'

export default function CartList() {
    return (
        <ProductConsumer>
            {
                value => {
                    const {cart} = value
                    return(
                        cart.map((product,index)=> {
                            return(
                                <CartProduct 
                                    product={product}
                                    key={index}
                                />
                            )
                        })
                    )
                }
            }
        </ProductConsumer>
    )
}
