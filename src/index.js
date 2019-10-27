import React from 'react'
import ReactDOM from 'react-dom'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import App from './App'
import './styles.css'
import DefaultErrorBoundary from './DefaultErrorBoundary'

ReactDOM.render(
  <React.StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </React.StrictMode>,
  document.getElementById('app')
)
