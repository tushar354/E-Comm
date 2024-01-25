import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusice Offer on Email</h1>
      <p>suscribe to newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='your email ID' />
        <button> Suscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
