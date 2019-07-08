import React from 'react'

import './Weather.scss'
import '../../style/css/weather-icons.min.css'

const Weather = props => (
  <div className='weather-wrapper'>
    {
      (props.city !== undefined && props.city !== '') &&
      <div className='display-weather'>
        <div className='info-block'>
          <div className='row'>
            <span className='row__city'>{props.city}, </span>
            <span className='row__country'>{props.country}</span>
          </div>
          <div className='info-block__temp'>
            {props.isChecked === false ? props.temp.toFixed(0) : (props.temp.toFixed(0) * 9 / 5 + 32).toFixed(0)}
            {props.isChecked === false ? '°C' : '°F'}</div>
        </div>
        <div className='imagine-block'>
          { props.icon !== undefined &&
          props.icon === '01d' ? <i className='wi wi-day-sunny' />
            : props.icon === '01n' ? <i className='wi wi-night-clear' />
              : props.icon === '02d' ? <i className='wi wi-day-cloudy' />
                : props.icon === '02n' ? <i className='wi wi-night-alt-cloudy' />
                  : props.icon === '04d' ? <i className='wi wi-cloudy' />
                    : props.icon === '04n' ? <i className='wi wi-cloudy' />
                      : props.icon === '03d' ? <i className='wi wi-cloud' />
                        : props.icon === '03n' ? <i className='wi wi-cloud' />
                          : props.icon === '09d' ? <i className='wi wi-sprinkle' />
                            : props.icon === '09n' ? <i className='wi wi-sprinkle' />
                              : props.icon === '10d' ? <i className='wi wi-day-rain' />
                                : props.icon === '10n' ? <i className='wi wi-night-alt-rain' />
                                  : props.icon === '11d' ? <i className='wi wi-thunderstorm' />
                                    : props.icon === '11n' ? <i className='wi wi-thunderstorm' />
                                      : props.icon === '13d' ? <i className='wi wi-snow' />
                                        : props.icon === '13n' ? <i className='wi wi-snow' />
                                          : props.icon === '50d' ? <i className='wi wi-day-fog' />
                                            : props.icon === '50n' ? <i className='wi wi-night-fog' /> : null
          }
          <span className='imagine-block__description'>{props.description}</span>
        </div>
      </div>
    }
  </div>
)

export default Weather
