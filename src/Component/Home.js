import React, { useEffect,useState } from 'react';
import  axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {

  const [products, setProducts]=useState([]);

useEffect(() => {
  loadProducts();
}, []);

 const loadProducts=async()=>{
  try {
    const result=await axios.get("http://localhost:8080/products", products);
    setProducts(result.data);
  } catch (error){
    console.error("network error:",error);
  }
 };

 
 const deleteProduct = async (productid)=>{
  try {
   await axios.delete(`http://localhost:8080/products/${productid}`)
   loadProducts();
  } catch (error) {
    console.error('There was an error deleting the product:',error);
  }
 };


  return (
    <>
      <h1> Welcome to home</h1><div className='container'>
       <div className='py-4'>
        <table className="table shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">productid</th>
              <th scope="col">name</th>
              <th scope="col">description</th>
              <th scope="col">price</th>
              <th scope="col">stockQuantity</th>
              <th scope="col">category</th>
              <th scope="col">storeid</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            {products.map((product, index) => (
             <tr key={index}> 
              <th scope="row">
                {index+1}
              </th>
              <td>{product.productid}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.stockQuantity}</td>
              <td>{product.category}</td>
              <td>{product.storeid}</td>
              <td>
                <Link className="btn btn-outline-primary mx-2"
                to={`/updateproduct/${product.productid}`}
                >
                  Update
                </Link>
                <button className="btn btn-danger mx-2"
                
                onClick={()=>deleteProduct(product.productid)}
                >
                  Delete</button>
                  <Link className="btn btn-primary mx-2" to={`/selectproduct/${product.productid}`}>
              Select
              </Link>
              </td>
            </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div></>
  );
}
export default Home;
