import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import DataProvider from './context/DataContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <CssBaseline/>
        <App />
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>,
)
