import React from 'react'
import '../css/PoposSpace.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
    const { name, image, address, hours, id } = props
    const [likeCount, setCount] = useState(0);
  return (
    <div className="POPOSSpace">
      <Link to={`/details/${id}`}>
        <h1>{name}</h1>
      </Link>
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
      </Link>
        <div>{address}</div>
        <div className="specialText">{hours}</div>
        <button onClick={() => setCount(likeCount + 1)}>Like</button>
        <p>{likeCount}likes</p>
    </div>
  )
}

export default POPOSSpace