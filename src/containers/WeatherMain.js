import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import { withRouter } from 'react-router-dom'

import Form from '../components/form/Form'
import Navbar from '../components/navbar/Navbar'
import Weather from '../components/weather/Weather'
import Switch from '../components/switch/Switch'
import Footer from '../components/footer/Footer'

import { getWeather } from '../actions/weatherAction'
import { checkboxHandler } from '../actions/switchAction'

import './WeatherMain.scss'

class WeatherMain extends Component {
  render () {
    return (
      <div>
        <hr />
        <Navbar />
        <hr />
        <h4 className='title'>What city you are in ?</h4>
        <div className='main-section'>
          <Form
            onSubmit={this.props.onGetWeather}
            city={this.props.city}
          />
          <div className='wrapper-switch-weather'>
            <Switch
              isChecked={this.props.isChecked}
              city={this.props.city}
              onSwitch={this.props.onSwitch}
            />
            <Weather
              isChecked={this.props.isChecked}
              city={this.props.city}
              country={this.props.country}
              temp={this.props.temp}
              description={this.props.description}
              icon={this.props.icon}
              className='weather-block'
            />
          </div>
        </div>
        <Footer
          isChecked={this.props.isChecked}
          city={this.props.city}
          temp={this.props.temp}
        />
      </div>
    )
  }
}

export default withRouter(
  connect(
    store => ({
      city: store.weatherReducer.city,
      country: store.weatherReducer.country,
      temp: store.weatherReducer.temp,
      description: store.weatherReducer.description,
      icon: store.weatherReducer.icon,
      isChecked: store.switchReducer.isChecked
    }),
    dispatch => ({
      onGetWeather: (event) => {
        dispatch(getWeather(event))
      },
      onSwitch: (isChecked) => {
        dispatch(checkboxHandler(isChecked))
      }
    })
  )(WeatherMain))
