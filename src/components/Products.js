import React, { Component } from 'react'

// Stateless component
const Products = (props) => {

  const renderProducts = () => (
      props.products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p style={{color: 'red'}}>{product.price} d</p>
        </div>
      ))
  )

  return (
    <div className="App">
      
      {/* Render number */}
      {renderProducts()}
    </div>
  );
}

export default Products;
