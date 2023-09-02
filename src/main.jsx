import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-use-history'
import { CssBaseline } from '@mui/material'
import DataProvider from './context/DataContext.jsx'
import { SnackbarProvider } from "notistack";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <DataProvider>
        <BrowserRouter>
          <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
            <CssBaseline/>
              <App/>
          </SnackbarProvider>
        </BrowserRouter>
      </DataProvider>
  </React.StrictMode>,
)
