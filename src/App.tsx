import './styling/App.scss'
import './styling/SideBar.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppRoutes from './AppRoutes'

const App = () => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <div className={'App'}>
                <AppRoutes />
            </div>
        </QueryClientProvider>
    )
}

export default App
