import React from 'react'
import Button from './Button'
import Rating from './Rating'

// Stateless component
const Products = (props) => {

  const renderProducts = () => (
      props.products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p style={{color: 'red'}}>{product.price} d</p>
          <Rating point={product.rating}/>
          <Button 
            nameBtn='Edit'
            onClickBtn={() => props.onClickEdit(product)}
          />
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
