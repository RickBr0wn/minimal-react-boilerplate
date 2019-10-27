import React from 'react'

class App extends React.Component {
  state = {
    count: 0
  }

  render() {
    return (
      <div>
        <h1>Development Server</h1>
        <h3>Port: 9000</h3>
        <br />
        <div>Count: {this.state.count}</div>
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

export default App
