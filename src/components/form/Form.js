import React, { Component } from 'react'

import './Form.scss'

class Form extends Component {
  constructor (...args) {
    super(...args)

    this.state = {
      city: ''
    }
  }
  changeInput = (field) => {
    return event => {
      const { value } = event.target

      this.setState({ [field]: value })
    }
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    this.props.onSubmit(evt)
    this.setState({
      city: ''
    })
  };

  render () {
    return (
      <div className='form-wrapper'>
        <form className='location' onSubmit={this.handleSubmit}>
          <input value={this.state.city}
            onChange={this.changeInput('city')}
            type='text'
            name='city'
            placeholder='City you are in...'
          />
          <input type='submit' value='GET RESULT' />
        </form>
        {
          this.props.city === undefined &&
          <p className='warning'>Please, check if city name is correct!</p>
        }
      </div>
    )
  }
}

export default Form
