import React from 'react'
import '../css/PoposSpace.css'
import { useState } from 'react'

function POPOSSpace(props) {
    const { name, image, address } = props
    const [likeCount, setCount] = useState(0);
  return (
    <div className="POPOSSpace">
      <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
      <h1>{name}</h1>
      <div>{address}</div>
      <button onClick={() => setCount(likeCount + 1)}>Like</button>
      <p>{likeCount}likes</p>
    </div>
  )
}

export default POPOSSpace