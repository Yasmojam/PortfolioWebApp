import React, { createContext, useState } from 'react'

export interface IContext {
    isMenuOpen: boolean
    setMenuOpen?: (isOpen: boolean) => void
}

export const PortfolioContext = createContext<IContext>({
    isMenuOpen: false,
})

export const PortfolioContextProvider: React.FC = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    return (
        <PortfolioContext.Provider value={{ isMenuOpen, setMenuOpen }}>
            {children}
        </PortfolioContext.Provider>
    )
}
