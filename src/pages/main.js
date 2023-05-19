import React, { useState, useEffect } from 'react'
import products from '../data/products.json'
import Header from '../components/header'
import Container from 'react-bootstrap/esm/Container'
import Home from './home'
import { category } from '../category'
import Cart from './cart'
import { Routes, Route } from "react-router-dom"

const Main = () => {
    const [data, setData] = useState(products.products)
    const [cart, setCart] = useState( JSON.parse(localStorage.getItem("cart")) || [])
    const [input, setInput] = useState('')
    const [title, setTitle] = useState('Главное')

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    console.log(data);

    const categoryClick = (text) => {
        const newList = products.products.filter((elem) => elem.category === text)
        setData([...newList])
        setTitle(text)
    }

    const addToCart = (id) => {
        const newList = products.products.find(elem => elem.id === id);
        if(newList){
            alert("Success product!")
        }
        setCart([...cart, newList])
    }

    const deleteToCart = (index) => {
        const confirmed = window.confirm('Delete the product?');
        if (confirmed) {
            setCart([...cart.filter((elem, i) => i !== index)]);
        }
    }

    const searchClick = () => {
        console.log("input", input);
        const newLit = products.products.filter((elem) => elem.title.toLowerCase().indexOf(input.toLowerCase()) >-1)
        setData(newLit)
    }

    return(
        <div>
            <Header  
                category = {category} 
                input={input} 
                setInput={setInput}
                searchClick={searchClick}
                categoryClick={categoryClick} 
            />
            <Container>
                <Routes>
                    <Route path='/' element={<Home data = {data} addToCart={addToCart} title={title} setTitle={setTitle} />} />
                    <Route path='/cart' element={<Cart deleteToCart={deleteToCart} cart = {cart} />} />
                </Routes>
            </Container>
        </div>
    )
}

export default Main


