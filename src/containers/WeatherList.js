import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import { withRouter } from 'react-router-dom'

import WeatherFiveDays from '../components/weatherFiveDays/WeatherFiveDays'
import Navbar from '../components/navbar/Navbar'

import './WeatherList.scss'

class WeatherList extends Component {
  render () {
    return (
      <div>
        <hr />
        <Navbar />
        <hr />
        {
          (this.props.city !== undefined && this.props.city !== '' && this.props.list !== undefined) &&
          <h4>Weather forecast for 5 days in {this.props.city}</h4>
        }
        <div className='main-section'>
          <div className='weatherList'>
            <div className='alert-wrapper'>
              {
                (this.props.city === undefined || this.props.city === '' || this.props.list === null) &&
                <p className='alert'>We don't know where you are !</p>
              }
            </div>
            <ul>
              {(this.props.city !== undefined && this.props.city !== '' && this.props.list !== undefined) &&
              <div>
                {Object.keys(this.props.list).map((date, index) =>
                  <li key={date} className='weatherList__days-table'>
                    <WeatherFiveDays
                      day={date}
                      city={this.props.city}
                      list={this.props.list[date]}
                      isOpen={index === 0}
                    />
                  </li>)
                }
              </div>
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(
  connect(
    store => ({
      city: store.weatherReducer.city,
      list: store.weatherReducer.list
    })
  )(WeatherList))
