import './styling/App.scss'
import './styling/SideBar.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppRoutes from './AppRoutes'

const App = () => {
    const queryClient = new QueryClient()
    if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
        // dark mode
        document.documentElement.setAttribute('theme-mode', 'dark')
    } else {
        document.documentElement.setAttribute('theme-mode', 'light')
    }

    return (
        <QueryClientProvider client={queryClient}>
            <div className={'App'}>
                <AppRoutes />
            </div>
        </QueryClientProvider>
    )
}

export default App
