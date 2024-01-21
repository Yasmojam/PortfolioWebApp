import React, { createContext, useState } from 'react'

export interface IContext {
    isMenuOpen: boolean
}

export const PortfolioContext = createContext({
    isMenuOpen: false,
    setMenuOpen: (isOpen: boolean) => {},
})

export const PortfolioContextProvider: React.FC = ({children}: {children: React.ReactNode} ) => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    return (
        <PortfolioContext.Provider value={{ isMenuOpen, setMenuOpen }}>
            {children}
        </PortfolioContext.Provider>
    )
}
