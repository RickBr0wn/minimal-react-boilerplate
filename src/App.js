import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Minimal React Boilerplate</h1>
        <div>Rick Brown &#169; {new Date().getFullYear()}</div>
      </div>
    )
  }
}

export default hot(module)(App)
