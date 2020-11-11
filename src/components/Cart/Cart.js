import React, { Component } from 'react'
import {ProductContext} from '../../context'
//components
import CartTable from './CartTable'
import EmptyCart from './EmptyCart'
import CartTotals from './CartTotals'

export default class Cart extends Component {
    static contextType = ProductContext
    render() {
        const {cart} = this.context
        
        if(cart.length < 1){
            return(
                <EmptyCart />
            )
        }
        return (
            <div className="cart">
                <CartTable />
                <CartTotals />
            </div>
        )
    }
}
