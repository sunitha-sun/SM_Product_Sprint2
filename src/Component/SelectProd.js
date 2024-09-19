import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function SelectProd() {

const [product,setProducts]=useState({
      productid:"",
      name:"",
      description:"",
      price:"",
      stockQuantity:"",
      category:"",
      storeid:""
})

const {productid}=useParams();

useEffect(()=>{
  loadProducts();
}, []);

const loadProducts=async ()=>{
    const result=await axios.get(`http://localhost:8080/products/${productid}`)
    setProducts(result.data);
}
  return (
    <div className="container">
         <div className="row">
            <div className="col-md-6 offset-md-3  boarder rounded p-4 mt-2">
              <h2 className="text-center m-4">SelectProd</h2>

              <div className="card">
                <div className="card-header">
                    Details of productid : {product.productid}
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <b>productid:</b>
                            {product.productid}
                        </li>
                        <li className="list-group-item">
                            <b>name:</b>
                            {product.name}
                        </li>
                        <li className="list-group-item">
                            <b>description:</b>
                            {product.description}
                        </li>
                        <li className="list-group-item">
                            <b>price:</b>
                            {product.price}
                        </li> 
                        <li className="list-group-item">
                            <b>stockQuantity:</b>
                            {product.stockQuantity}
                        </li> 
                        <li className="list-group-item">
                            <b>category:</b>
                            {product.category}
                        </li> 
                        <li className="list-group-item">
                            <b>storeid:</b>
                            {product.storeid}
                        </li> 
                    </ul>
                </div>
              </div>
              <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>
            </div>
         </div>
    </div>
  )
}
