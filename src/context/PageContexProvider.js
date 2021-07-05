import React, { createContext, useContext, useState } from 'react'

const PageContext = createContext({ page: null, setPage: null })
/**
 * Context provider for maintaining the selected tool state across app
 * */
export const PageContextProvider = ({ children }) => {
    const [selectedPage, setSelectedPage] = useState('')

    return (
        <PageContext.Provider
            value={{ page: selectedPage, setPage: setSelectedPage }}
        >
            {children}
        </PageContext.Provider>
    )
}

export const useSelectedPage = () => useContext(PageContext)
