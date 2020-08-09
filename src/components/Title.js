import React from 'react'
import '../css/Title.css'
import { NavLink } from 'react-router-dom'

function Title() {
  return (
    <div className="Title">
    <div>
      <h1>SFPOPOS</h1>
    </div>
      <div className="Title-Subtitle">
          <h3>San Francisco Privately Owned Public Open Spaces</h3>
      </div>
      <div>
      <NavLink
        className="nav-link"
        activeClassName="nav-link-active"
        exact
        to="/">List</NavLink>

      <NavLink
        className="nav-link"
        activeClassName="nav-link-active"
        to="/about">About</NavLink>
        </div>
    </div>
  )
}

export default Title