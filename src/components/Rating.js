import React from 'react'

const MAX_STAR = 5
const Rating = (props) => {
  let stars = []
  let classStar = ''
  for(let i = 0; i < MAX_STAR; i++) {
    classStar = i < props.point ? 'fas' : 'far'
    stars.push(<i key={i} className= {classStar + ' fa-star'}></i>)
  }
  return (stars)
}

export default Rating
