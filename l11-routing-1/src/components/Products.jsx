import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Product from './Product'

const Products = () => {

  const [products, setProducts]= useState([])

  useEffect(() => {
       
      fetch('http://localhost:8080/products ')
      .then((res)=> res.json())
      .then((data)=> {
           setProducts(data);
      })
  },[])
  return (
    <div style={{display:"flex", justifyContent:"space-around"}}>Products
      <div>
        {products.map((data)=> (
          <div key ={data.id}>
           <Link to={`/products/${data.id}`}>{data.name}</Link> 
            </div>
        ))} 
      </div>
      <div>
        <Outlet/>
      </div>
      
       
    </div>
  )
}

export default Products