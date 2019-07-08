import React from 'react'

import './Titles.scss'

const Titles = props => (
  <div className='titles-wrapper'>
    <div className='title-block'>
      <h1 className='main-title'>{props.title}</h1>
      <button className='skewBtn blue' onClick={props.logout}>Logout</button>
    </div>
    <h3>{props.subtitle}</h3>
  </div>
)

export default Titles
