import React, { Component, Fragment } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import '../assets/css/App.css'
import routes from '../router/router.js'

class App extends Component {
  constructor (prop) {
    super(prop)
    this.state = {
      list: ['React', 'App'],
      type: 2
    }
  }
  componentDidMount () {
    console.log(this)
  }

  render () {
    return (
      <Router>
        <Fragment>
          {routes.map((route, key) => {
            if (route.exact) {
              return (
                <Route
                  key={key}
                  exact
                  path={route.path}
                  component={route.component}
                />
              )
            } else {
              return (
                <Route
                  key={key}
                  path={route.path}
                  component={route.component}
                />
              )
            }
          })}
        </Fragment>
      </Router>
    )
  }
}
export default App
