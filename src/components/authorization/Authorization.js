import React, { Component } from 'react'
import { createBrowserHistory } from 'history'

import './Authorization.scss'

class Authorization extends Component {
  constructor (...args) {
    super(...args)

    this.state = {
      name: '',
      pass: ''
    }

    this.onInputChanged = this.onInputChanged.bind(this)
    this.login = this.login.bind(this)
  }

  onInputChanged (e) {
    const field = e.target.name
    const { value } = e.target

    this.setState({ [field]: value })
  }

  login () {
    localStorage.setItem('user', this.state.name)
    localStorage.setItem('pass', this.state.pass)
    const history = createBrowserHistory()
    history.push('/')
  }

  render () {
    return (
      <form className='panel-lite' onSubmit={this.login}>
        <div className='thumbur'>
          <div className='icon-lock' />
        </div>
        <h4>Login</h4>
        <div className='form-group'>
          <input className='form-control'
            required='required'
            value={this.state.name}
            name='name'
            onChange={this.onInputChanged}
            type='text'
          />
          <label className='form-label'>Username </label>
        </div>
        <div className='form-group'>
          <input className='form-control'
            required='required'
            value={this.state.pass}
            name='pass'
            onChange={this.onInputChanged}
            type='password'
          />
          <label className='form-label'>Password</label>
        </div>
        <button
          className='floating-btn'>
          <i className='icon-arrow' />
        </button>
      </form>
    )
  }
}

export default Authorization
