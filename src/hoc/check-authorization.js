import React from 'react'
import Authorization from '../components/authorization/Authorization'

export default Component => class CheckAuthorization extends React.Component {
  constructor (...args) {
    super(...args)
    this.logout = this.logout.bind(this)
  }

  get user () {
    return localStorage.getItem('user')
  }
  get pass () {
    return localStorage.getItem('pass')
  }

  logout (e) {
    e.preventDefault()
    localStorage.removeItem('user')
    localStorage.removeItem('pass')
    window.location.reload()
  }

  render () {
    return (
      this.user && this.pass
        ? <Component {...this.props} logout={this.logout} />
        : <Authorization />
    )
  }
}
