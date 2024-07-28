import React, { useContext } from 'react'
import './styling/App.scss'
import { PortfolioContext } from './context/PortfolioContext'
import { useWindowType } from './utils/window'
import './styling/SideBar.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppRoutes from './AppRoutes'

const App = () => {
    const queryClient = new QueryClient()
    const windowType = useWindowType()
    const context = useContext(PortfolioContext)
    const isOpen = context.isMenuOpen

    return (
        <QueryClientProvider client={queryClient}>
        <div className={'App'}>
            <AppRoutes/>
        </div>
        </QueryClientProvider>
    )
}

export default App
