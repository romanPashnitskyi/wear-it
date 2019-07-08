import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import { withRouter } from 'react-router-dom'

import Navbar from '../components/navbar/Navbar'
import Wear from '../components/wear/Wear'

import './Outfit.scss'

class Outfit extends Component {
  render () {
    return (
      <div>
        <hr />
        <Navbar />
        <hr />
        {
          (this.props.city !== undefined && this.props.city !== '') &&
          <h4>Some clothes to your consideration...</h4>
        }
        <Wear
          city={this.props.city}
          temp={this.props.temp}
          icon={this.props.icon}
        />
      </div>
    )
  }
}

export default withRouter(
  connect(
    store => ({
      city: store.weatherReducer.city,
      temp: store.weatherReducer.temp,
      icon: store.weatherReducer.icon
    })
  )(Outfit))
