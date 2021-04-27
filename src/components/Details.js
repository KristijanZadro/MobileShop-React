import React, { Component } from 'react'
import {ProductContext} from '../context'
import {Link} from 'react-router-dom'
import '../App.css'

export default class Details extends Component {
    static contextType = ProductContext;
    render() {
        const {openModal,addToCart, detailProduct} = this.context
        const {id,title,img,company,price,info,inCart} = detailProduct
        
        return (
            <div className="details">
                <div className="title-details">
                    <h1>{title}</h1>
                </div> 
                <div className="product-info">
                    <div className="left">
                        <img src={process.env.PUBLIC_URL + img} alt="img" />
                    </div>
                    <div className="right">
                        <h3><span>Model: </span>{title}</h3>
                        <h3><span>MADE BY: </span>{company}</h3>
                        <p><span>Price:</span>${price}</p>
                        <p><b>Some info about:</b></p>
                        <p>{info}</p>
                        <div className="buttons">
                            <Link to="/" style={{textDecoration:"none"}}>
                                <button className="button-details">
                                    Back to Product
                                </button>
                            </Link>
                            <button 
                                disabled={inCart ? true : false} 
                                className="button-details"
                                onClick={()=> {
                                    openModal(id)
                                    addToCart(id)
                                }}
                            >
                                {inCart ? "inCart" : "add to cart"}
                            </button>

                        </div>
                    </div>
        
                </div>
                
            </div> 
                            
        )
        
    }
}


