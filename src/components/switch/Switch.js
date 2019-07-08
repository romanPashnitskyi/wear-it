import React from 'react'

import './Switch.scss'

const Switch = props => (
  <div className='switch'>
    {
      (props.city !== undefined && props.city !== '') &&
      <div className='switch-wrapper'>
        <label className='toggle-label'>
          <input type='checkbox'
            checked={props.isChecked}
            onChange={() => props.onSwitch(props.isChecked)}
            className='inp-check'
          />
          <span className='back'>
            <span className='toggle' />
            <span className='label on'>C</span>
            <span className='label off'>F</span>
          </span>
        </label>
      </div>
    }
  </div>
)

export default Switch
