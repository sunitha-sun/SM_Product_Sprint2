import axios from "axios";
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams } from "react-router-dom";


export default function UpdateProd() {


  let navigate=useNavigate();

  const {productid}=useParams()

  const [products,setProducts]=useState({
    productid:"",
    name:"",
    description:"",
    price:"",
    stockQuantiy:"",
    category:"",
    storeid:""
  });

  const {name,description,price,stockQuantity,category,storeid}=products

  const onInputChange=(e)=>{
    setProducts({...products,[e.target.name]:e.target.value});
  };

  useEffect(()=>{
    loadProducts()
  }, []);

  const onSubmit=async (e)=>{
    e.preventDefault();
    console.log(products);
    await axios.put(`http://localhost:8080/products/${productid}`, products)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error('There was an error making the request:', error);
    });
    navigate("/");
  };

  const loadProducts=async (e)=>{
       const result=await axios.get(`http://localhost:8080/products/${productid}`)
       setProducts(result.data)
  }
  return  <div className="container">
         <div className="row">
            <div className="col-md-6 offset-md-3  boarder rounded p-4 mt-2">
              <h2 className="text-center m-4">UpdateProd</h2>

              <form onSubmit={(e)=>onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="productid" className="form-label">
                  productid
                  </label>
                  <input
                  type={"text"}
                  className="form-control"
                  placeholder="enter the productid"
                  name="productid"
                  value={productid}
                  onChange={(e)=>onInputChange(e)}
                  />
                  </div>
                  <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  name
                  </label>
                  <input
                  type={"text"}
                  className="form-control"
                  placeholder="enter the name"
                  name="name"
                  value={name}
                  onChange={(e)=>onInputChange(e)}
                  />
                  </div>
                  <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  price
                  </label>
                  <input
                  type={"text"}
                  className="form-control"
                  placeholder="enter the price"
                  name="price"
                  value={price}
                  onChange={(e)=>onInputChange(e)}
                  />
                  </div>
                  <div className="mb-3">
                <label htmlFor="stockQuantity" className="form-label">
                 stock Quantity
                  </label>
                  <input
                  type={"text"}
                  className="form-control"
                  placeholder="enter the stock quantity"
                  name="stockQuantity"
                  value={stockQuantity}
                  onChange={(e)=>onInputChange(e)}
                  />
                  </div>
                  <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  description
                  </label>
                  <input
                  type={"text"}
                  className="form-control"
                  placeholder="enter the description"
                  name="description"
                  value={description}
                  onChange={(e)=>onInputChange(e)}
                  />
                  </div>
                  <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  category
                  </label>
                  <input
                  type={"text"}
                  className="form-control"
                  placeholder="enter the category"
                  name="category"
                  value={category}
                  onChange={(e)=>onInputChange(e)}
                  />
                  </div>
                  <div className="mb-3">
                <label htmlFor="storeid" className="form-label">
                  storeid
                  </label>
                  <input
                  type={"text"}
                  className="form-control"
                  placeholder="enter the storeid"
                  name="storeid"
                  value={storeid}
                  onChange={(e)=>onInputChange(e)}
                  />
                  </div>
                  <button type="submit" className="btn btn-outline-primary">
                    Submit
                  </button>
                  <button type="submit" className="btn btn-outline-danger mx-2">
                    Cancel
                  </button>
                  </form>
              </div>
            </div>
         </div>;
}