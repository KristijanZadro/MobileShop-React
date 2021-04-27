import React from 'react'
import {MdDelete} from 'react-icons/md'
import {ProductConsumer} from '../../context'
import './Cart.css'

export default function CartProduct({product}) {
    const {id,img,title,price,count,total} = product
    return (
        <ProductConsumer>
            {
                value => {
                    const {decrement,increment,deleteProduct} = value
                    return(
                        <tbody>
                            <tr>
                                <td>
                                    <img src={process.env.PUBLIC_URL + img} alt="img" width="50" height="50" />
                                </td>
                                <td>{title}</td>
                                <td>${price}</td>
                                <td>
                                    <span onClick={()=> decrement(id)}>
                                        <button className="count">-</button>
                                    </span>
                                    <span>{count}</span>
                                    <span onClick={()=> increment(id)}>
                                        <button className="count">+</button>
                                    </span>
                                </td>
                                <td 
                                    className="delete" 
                                    onClick={()=> deleteProduct(id)}
                                >
                                    <MdDelete />
                                </td>
                                <td>${total}</td>

                            </tr>
                        </tbody>
                    )
                }
            }
        </ProductConsumer>
        
    )
}
