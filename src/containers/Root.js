import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'

import WeatherMain from './WeatherMain'
import Outfit from './Outfit'
import WeatherList from './WeatherList'
import Titles from '../components/titles/Titles'

import CheckAuthorization from '../hoc/check-authorization'

import './Root.scss'

class Root extends Component {
  render () {
    return (
      <div className='app'>
        <Titles
          title='#wearIt'
          subtitle="Check the weather and we'll help you..."
          logout={this.props.logout}
        />
        <Provider store={this.props.store}>
          <Router>
            <Switch>
              <Route
                exact path={`/`}
                render={() => <WeatherMain />}
              />
              <Route
                path={`/outfit`}
                render={() => <Outfit />}
              />
              <Route
                path={`/forecast5days`}
                render={() => <WeatherList />}
              />
            </Switch>
          </Router>
        </Provider>
      </div>
    )
  }
}

export default CheckAuthorization(Root)
