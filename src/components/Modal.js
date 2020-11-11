import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'

export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {
                    value => {
                        const {closeModal,modalOpen} = value
                        const {img, title, price} = value.modalProduct
                        
                        if(!modalOpen){
                            return null
                        }
                        return(
                            <div className="modal">
                                <h2>Item added to the cart</h2>
                                <img src={'../' + img} alt="product-img" width="250" height="250" />
                                <h3>{title}</h3>
                                <h3>price: ${price}</h3>
                                <div className="buttons">
                                    <Link to="/" style={{textDecoration: "none"}}>
                                        <button 
                                            className="button"
                                            onClick={()=> closeModal()}
                                        >
                                            continue shopping
                                        </button>
                                    </Link>
                                    <Link to="/cart" style={{textDecoration: "none"}}>
                                        <button 
                                            className="button"
                                            onClick={()=> closeModal()}
                                        >
                                            go to cart
                                        </button>
                                    </Link>
                                </div>
                               
                            </div> 
                        )
                    }
                }
            </ProductConsumer>
        )
    }
}
