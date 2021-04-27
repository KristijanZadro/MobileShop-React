import React from 'react'
import '../App.css'
import {TiShoppingCart} from 'react-icons/ti'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types'


export default function Product({product}) {
    const {id,img,price,title,inCart} = product
    return (
        <ProductConsumer>
            {
                value => {
                    return(
                        <div className="product">
                            <div 
                                className="img-container"
                                onClick={()=> value.handleDetails(id)}
                            >
                                <Link to={{
                                    pathname: `/details/${id}`
                                }}>
                                    <img 
                                        src={process.env.PUBLIC_URL + img} 
                                        alt="mobile" 
                                    />
                                </Link>
                                <button 
                                    className="card-icon"
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        value.openModal(id)
                                        value.addToCart(id)
                                    }}
                                >
                                    <TiShoppingCart />
                                </button>
                            </div>
                            <div className="info">
                                <h3>{title}</h3>
                                <span>${price}</span>
                            </div>
                            
                        </div>

                    )
                }
            }
        </ProductConsumer>
        
    )
}
Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    })
}