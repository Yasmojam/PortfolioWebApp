import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

export const ToggleThemeButton = ({ transparent = false }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(
        document.documentElement.getAttribute('theme-mode') === 'dark'
    )

    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false)
            document.documentElement.setAttribute('theme-mode', 'light')
        } else {
            setIsDarkMode(true)
            document.documentElement.setAttribute('theme-mode', 'dark')
        }
    }

    return (
        <div className="c-button-wrapper u-topMediumMargin">
            <button
                style={{
                    margin: 0,
                    height: 50,
                    width: 50,
                    borderRadius: '50%',
                    backgroundColor: transparent
                        ? 'transparent'
                        : 'var(--menu-color)',
                    border: `${
                        transparent ? 'var(--logo-color)' : 'white'
                    } 2px solid`,
                }}
                onClick={() => toggleTheme()}
            >
                <FontAwesomeIcon
                    icon={isDarkMode ? faSun : faMoon}
                    color={transparent ? 'var(--logo-color)' : 'white'}
                />
            </button>
        </div>
    )
}
