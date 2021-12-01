import React,{useState, useEffect} from 'react'

import axios from 'axios'
import "./product.css"
import {useNavigate} from 'react-router-dom'


function Productlist() {
const navigate=useNavigate()
    
const [posts, setPost]=useState([]);
    
   
    
    useEffect(() =>{

        axios.get("http://localhost:9002/productlist")
        .then(res => {
            const posts=res.data;
            setPost(posts);
            console.log(res.data);
        })
        
        
        
    },[]);
    
    return (
        <div  className="product">
            <h1> Product List</h1>
            
            <table border="1" cellPadding="5">
                <thead><tr><td>Name</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Category</td></tr></thead>
                
 <tbody>{posts.map(item=>
 <tr><td>{item.name}</td>
 <td>{item.price}</td>
 <td>{item.quantity}</td>
 <td>{item.category}</td></tr>
 )}
</tbody>
            
            
                </table><br/><br/>
            <div className="button"  onClick={()=>navigate("/addproduct")}>Add Product</div>
        </div>
    )

    }
export default Productlist
