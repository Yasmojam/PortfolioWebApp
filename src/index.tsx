import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { PortfolioContextProvider } from './context/PortfolioContext'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <PortfolioContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </PortfolioContextProvider>
    </React.StrictMode>
)
