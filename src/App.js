import React from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))

class App extends React.Component {
  state = {
    count: 0
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h1>Development Server</h1>
        <h2>Port: 9000</h2>
        <br />
        <div className={count > 8 ? 'warning' : null}>Count: {count}</div>
        <button
          onClick={() =>
            this.setState(prevState => ({ count: prevState.count + 1 }))
          }
        >
          +
        </button>
        <button
          onClick={() =>
            this.setState(prevState => ({ count: prevState.count - 1 }))
          }
        >
          -
        </button>
        {count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

export default hot(module)(App)
