import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/main.css'
import App from './App'
import { Home } from './pages/home/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Home />
  </React.StrictMode>
)
