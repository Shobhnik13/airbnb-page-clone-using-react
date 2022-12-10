import React from 'react'

const card = (props) => {
  let badgeText
  if(props.openSpots===0){
    badgeText="SOLD OUT";
  }
  else if(props.location==='online'){
    badgeText="ONLINE"
  }
  return (
   <card>
    <img src={props.img} className='cardimg' />
    {badgeText && <div className='card-badge'>{badgeText}</div>}
    <div className='card-stats'>
    <img src="../images/star.svg" className='starimg'/>
    <span>{props.rating}</span>
    <span className='gray'>({props.reviewCount}) . </span>
    <span className='gray'>{props.location}</span>
    </div>
    <p className='info'>{props.title}</p>
    <p className='price'><span className='bold'>From ${props.price}</span> / person </p>
   </card>
  )
}

export default card