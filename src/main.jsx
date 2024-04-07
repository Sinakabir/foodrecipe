import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from   'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import GlobalState from './context/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <GlobalState>
          <App />
      </GlobalState>
    
    </Router>
    
  </React.StrictMode>,
)
