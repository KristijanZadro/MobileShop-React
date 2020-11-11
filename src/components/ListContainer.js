import React from 'react'
import {ProductConsumer} from '../context'
//components
import Title from './Title'
import ListFilter from './ListFilter'
import ProductList from './ProductList'
import Loading from './Loading'


export default function ListContainer() {
    return (
        <ProductConsumer>
            {
                value => {
                    const {loading} = value
                    return(
                        <div>
                            <Title title="our products"/>
                            <ListFilter />
                            {
                                loading ? <Loading /> : <ProductList />
                            }
                        </div>
                    )
                }
            }
        </ProductConsumer>
        
             
        
    )
}
