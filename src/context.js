import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data'

const ProductContext = React.createContext()

class ProductProvider extends Component {
    constructor(){
        super()
        this.state = {
            products: [],
            sortedProducts: [],
            cart: [],
            modalProduct: {},
            detailProduct,
            loading: true,
            modalOpen: false,
            company:"all",
            price: 0,
            minPrice: 0,
            maxPrice: 0,
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0

        }
    }
    componentDidMount(){
        this.setProducts()
    }

    setProducts = () => {
        let tempProducts = []
        storeProducts.forEach(item => {
            let product = {...item}
            return(
                tempProducts = [...tempProducts, product]
            )
        })
        let maxPrice = Math.max(...tempProducts.map(product => product.price))

        this.setState({
            products: tempProducts,
            sortedProducts: tempProducts,
            loading: false,
            price: maxPrice,
            maxPrice
        })
    }

    handleChange = e => {
        const target = e.target
        const value = target.value
        const name = e.target.name
        this.setState({
            [name]: value
        },this.filterProducts)
    }

    filterProducts = () => {
        const {company,price,products} = this.state
        let tempProducts = [...products]
        if(company !== 'all'){
            tempProducts = tempProducts.filter(product => product.company === company)
        }
        tempProducts = tempProducts.filter(product => product.price <= price)

        this.setState({
            sortedProducts: tempProducts
        })
    }

    getProduct = id => {
        let tempProducts = [...this.state.products]
        const product = tempProducts.find(product => product.id === id)
        return product

    }

    openModal = (id) => {
        const product = this.getProduct(id)
        this.setState({
            modalProduct: product,
            modalOpen: true
        })

    }
    
    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }
    
    handleDetails = (id) => {
        const product = this.getProduct(id)
        this.setState({
            detailProduct: product
        })
    }
    
    addToCart = (id) => {
        let tempProducts = [...this.state.products]
        let index = tempProducts.indexOf(this.getProduct(id))
        let product = tempProducts[index]
        product.inCart = true
        product.count = 1
        let price = product.price
        product.total = price
        this.setState({
            product: tempProducts,
            cart: [...this.state.cart,product]
        },()=> {
            this.addTotals()
        })


    }
    increment = id => {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(product => product.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count += 1
        product.total = product.count * product.price
        this.setState({
            cart: [...tempCart]
        },()=> {
            this.addTotals()
        })
    }

    decrement = id => {
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(product => product.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count -= 1
        if(product.count === 0){
            this.deleteProduct(id)
        }else{
            product.total = product.count * product.price
        this.setState({
            cart: [...tempCart]
        },()=> {
            this.addTotals()
        })
        }

    }

    deleteProduct = id => {
        let tempCart = [...this.state.cart]
        tempCart = tempCart.filter(product => product.id !== id)
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getProduct(id))
        const removedProduct = tempProducts[index]
        removedProduct.inCart = false
        removedProduct.count = 0
        removedProduct.total = 0
        this.setState({
            cart: [...tempCart],
            product: [...tempProducts]
        },()=> {
            this.addTotals()
        })

    }

    clearCart = () => {
        this.setState({
            cart: []
        },()=> {
            this.setProducts()
            this.addTotals()
        })
    }

    addTotals = () => {
        let subTotal = 0
        this.state.cart.map(product => subTotal += product.total)
        const tempTax = subTotal * 0.17
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax
        this.setState({
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total
            
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleChange: this.handleChange,
                openModal: this.openModal,
                closeModal: this.closeModal,
                handleDetails: this.handleDetails,
                addToCart: this.addToCart,
                increment: this.increment,
                decrement: this.decrement,
                deleteProduct: this.deleteProduct,
                clearCart: this.clearCart
                
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer, ProductContext}