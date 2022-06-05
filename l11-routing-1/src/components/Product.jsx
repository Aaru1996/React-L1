import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
// useParams-> use to provide parameters of link . like id
  const {id} =useParams();
  const [product, setProduct]=useState({});

  useEffect(() => {
          fetch(`http://localhost:8080/products/${id}`)
          .then((res) => res.json())
          .then((data)=> {
            setProduct(data);
          })
  },[id])

  // console.log(id)
  return (
    <div>Product:ID{id}
        <div>{product.name}</div>
        {/* <div> {product.id}</div> */}
    </div>
  )
}

export default Product