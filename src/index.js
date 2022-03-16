import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { PortfolioContextProvider } from './context/PortfolioContext'

ReactDOM.render(
    <React.StrictMode>
        <PortfolioContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PortfolioContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
