import React, { Component } from 'react'
import { FacebookIcon, FacebookShareButton,
  TelegramIcon, TelegramShareButton,
  ViberIcon, ViberShareButton,
  TwitterIcon, TwitterShareButton } from 'react-share'

import './Footer.scss'

class Footer extends Component {
  render () {
    let temperature
    let units
    let weather
    const url = 'https://wear-it.herokuapp.com/'
    if (this.props.city !== undefined && this.props.city !== '') {
      temperature = this.props.isChecked === false ? this.props.temp.toFixed(0) : (this.props.temp.toFixed(0) * 9 / 5 + 32).toFixed(0)
      units = this.props.isChecked === false ? '°C' : '°F'
      weather = `Weather in ${this.props.city} ${temperature}${units}`
    }
    return (
      (this.props.city !== undefined && this.props.city !== '') &&
      <div className='footer-wrapper'>
        <div className='wrapper-row'>
          <FacebookShareButton quote={weather} url={url}>
            <FacebookIcon
              size={32}
              round />
          </FacebookShareButton>
        </div>
        <div className='wrapper-row'>
          <TelegramShareButton title={weather} url={url}>
            <TelegramIcon
              size={32}
              round />
          </TelegramShareButton>
        </div>
        <div className='wrapper-row'>
          <ViberShareButton title={weather} url={url}>
            <ViberIcon
              size={32}
              round />
          </ViberShareButton>
        </div>
        <div className='wrapper-row'>
          <TwitterShareButton title={weather} url={url}>
            <TwitterIcon
              size={32}
              round />
          </TwitterShareButton>
        </div>
      </div>
    )
  }
}

export default Footer
