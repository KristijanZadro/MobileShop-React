import React from 'react'
import {ProductConsumer} from '../context'
import '../App.css'
//components
import Product from './Product'


export default function ProductList() {
    return (
        <div>
            <ProductConsumer>
                {
                    value => {
                        const {sortedProducts} = value
                        return(
                            <div  className="products-list">
                                {
                                    sortedProducts.map(product => {
                                        return(
                                            <Product 
                                                product={product}
                                                key={product.id}
                                            />
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                }
            </ProductConsumer>
        </div>
    )
}
