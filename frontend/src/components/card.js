import React from 'react'

const card = (props) => {
  return (
   <card>
    <img src={props.img} className='cardimg' />
    <div className='card-stats'>
    <img src="../images/star.svg" className='starimg'/>
    <span>{props.rating}</span>
    <span className='gray'>({props.reviewCount}) . </span>
    <span className='gray'>{props.country}</span>
    </div>
    <p className='info'>{props.title}</p>
    <p className='price'><span className='bold'>From ${props.prices}</span> / person </p>
   </card>
  )
}

export default card