import React, { Component } from 'react'
import './styles/ProductItemStyles.css'
import Button from './../../../common/Button'
import Rating from './Rating'

class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tempPoint: this.props.rating
    }
  }
  onHoverStar = (index) => {
    console.log('index', index)
    this.setState({tempPoint: index})
  }

  render() {
    const { name, price, rating, onClickEdit, onClickDelete, onRating } = this.props
    return (
      <div className='group-product'>
        <div className='product-info'>
          <h3 className='text'>{name}</h3>
          <p className='text'>{price}</p>
          <Rating 
            point={this.state.tempPoint}
            onMouseEnter={(index) => this.onHoverStar(index + 1)}
            onMouseLeave={() => this.onHoverStar(rating)}
            onRating={(index)=> onRating(index + 1)}
          />
        </div>
        <div className='group-btn'>
          <Button nameBtn='edit' onClickBtn={onClickEdit}/>
          <Button nameBtn='delete' onClickBtn={onClickDelete}/>
        </div>
      </div>
    )
  }
}

export default ProductItem
