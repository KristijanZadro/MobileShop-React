import React from 'react'
import {ProductConsumer} from '../context'
import '../App.css'

const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}

export default function ListFilter() {
    return (
        <ProductConsumer>
            {
                value => {
                    const {products,company,price,minPrice,maxPrice,handleChange} = value
                    
                    let companies = getUnique(products, 'company')
                    companies = ['all',...companies]
                    companies = companies.map((company,index) => {
                        return(
                            <option key={index} value={company}>{company}</option>
                        )
                    })
                    return(
                        <div className="list-filter">
                            <div className="form-group">
                                <label htmlFor="type">
                                    company type
                                </label>
                                <select 
                                    name="company" 
                                    id="company" 
                                    value={company} 
                                    className="form-control"
                                    onChange={handleChange}
                                >
                                    {companies}
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="price"> 
                                    mobile price ${price}
                                </label>
                                <input 
                                    type="range" 
                                    name="price"
                                    min={minPrice}
                                    max={maxPrice}
                                    id="price"
                                    value={price}
                                    onChange={handleChange}
                                    className="form-control" 
                                />
                            </div>
                        </div>
                    )
                }
            }
        </ProductConsumer>
    )
}
