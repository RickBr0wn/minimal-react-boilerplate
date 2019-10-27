import React from 'react'
import { hot } from 'react-hot-loader'

class App extends React.Component {
  state = {
    count: 0
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h1>Development Server</h1>
        <h3>Port: 9000</h3>
        <br />
        <div className={count > 5 ? 'warning' : null}>Count: {count}</div>
        <button
          onClick={() =>
            this.setState(prevState => ({ count: prevState.count + 1 }))
          }>
          +
        </button>
        <button
          onClick={() =>
            this.setState(prevState => ({ count: prevState.count - 1 }))
          }>
          -
        </button>
      </div>
    )
  }
}

export default hot(module)(App)
