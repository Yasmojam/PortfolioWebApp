import { useLayoutEffect, useState } from 'react'

const useWindowSize = () => {
    const [size, setSize] = useState([0, 0])
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
    }, [])
    return size
}

/**
 * Returns the "DESKTOP" or "MOBILE" depending on window size.
 * @returns {string} - "DESKTOP" or "MOBILE"
 */
export const useWindowType = () => {
    const [width] = useWindowSize()
    return width >= 768 ? 'DESKTOP' : 'MOBILE'
}
