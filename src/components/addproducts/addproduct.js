import React, {useState} from 'react'
import "../productlist/product.css"
import axios from 'axios'
import {Link} from 'react-router-dom'

function Addproduct() {
    const [ product, setUser] = useState({
        name:"",
        price:"",
        quantity:"",
        category:""

    })
    const handleChange = e => {
        console.log(e.target);
        const { name, value}=e.target
        setUser({
            ...product,
            [name]:value
        })
    }
    const addproduct = () =>{
        const { name, price, quantity, category} = product
        axios.post("http://localhost:9002/addproduct",product)
        .then(res => console.log(res))
    }
    return (
        <div className="register">
        <h1>Add product</h1>
        <input type="text" name="name" value={product.name} placeholder="Enter product name" onChange={handleChange}></input>
        <input type="text" name="price" value={product.price} placeholder="Price"  onChange={handleChange}></input>
        <input type="Number" name="quantity" value= {product.quantity} placeholder="Quantity"  onChange={handleChange}></input>
        <input type="text" name="category" value={product.category} placeholder="Category"  onChange={handleChange}></input>
        
        <div className="button" onClick={addproduct} >Submit</div>
        <Link to="/productlist">Back</Link>
    </div>
    )
}

export default Addproduct
