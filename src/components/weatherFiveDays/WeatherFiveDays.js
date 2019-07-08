import React, { Component } from 'react'
import TransitionGroup from 'react-addons-css-transition-group'

import './WeatherFiveDays.scss'

class WeatherFiveDays extends Component {
  state = {
    open: this.props.isOpen
  };

  componentWillReceiveProps (nextProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      this.setState({
        open: nextProps.isOpen
      })
    }
  }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render () {
    const { day, list } = this.props
    return (
      <div className='weather__block'>
        <div className='weather__days-of-week'>
          <div className='weather__day'>
            {new Date(day).toUTCString().substring(0, 11)}
          </div>
          <i style={{ fontSize: '30px' }} onClick={this.handleClick} className='weather__btn' >
            {this.state.open
              ? <i className='fas fa-arrow-alt-circle-up' />
              : <i className='fas fa-arrow-alt-circle-down' />
            }
          </i>
        </div>
        <TransitionGroup
          transitionName='example'
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}
        >
          {this.state.open &&
          <div className='weather__weather-of-day' >
            {list.map((item, idx) =>
              <div key={idx} className='weather__block-info'>
                <div className='weather__hour'>
                  Hour: {item.hour}
                </div>
                <div className='temperature'>
                  Temp: {item.temp.toFixed(0)}°C
                </div>
                <div className='weather__description'>
                  <img alt={item.description} src={item.icon} />
                  {item.description}
                </div>
              </div>
            )}
          </div>
          }
        </TransitionGroup>
      </div>
    )
  }
}

export default WeatherFiveDays
