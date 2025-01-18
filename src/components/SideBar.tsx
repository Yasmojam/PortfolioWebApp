import { Link, useLocation } from 'react-router-dom'
import '../styling/SideBar.scss'
import { useWindowType } from '../utils/window'
import { listOfPages } from '../utils/shared'
import { ToggleThemeButton } from './ToggleThemeButton'

/**
 * Component which represents web application side navigation bar.
 */
const SideBar = ({ iconSrc }: { iconSrc?: string }) => {
    let location = useLocation().pathname
    const windowType = useWindowType()

    const pages = listOfPages.map((page, index) => {
        if (page.title !== 'Home') {
            return (
                <Link
                    key={index}
                    className={location === page.to ? 'page-active' : 'page'}
                    to={page.to}
                >
                    {page.title}
                </Link>
            )
        }
        return null
    })

    return (
        <div
            className={
                windowType === 'MOBILE'
                    ? 'sidebar-options-mobile'
                    : 'sidebar-options-desktop'
            }
        >
            <div
                className={
                    windowType === 'MOBILE'
                        ? 'nav-brand-cont-mobile'
                        : 'nav-brand-cont-desktop'
                }
            >
                <Link to={'/'} className="brand">
                    {windowType === 'MOBILE' ? (
                        <span style={{ height: 100 }} />
                    ) : (
                        <>
                            {iconSrc && (
                                <div className={'brand-icon-cont'}>
                                    <img
                                        className="sidebar-icon"
                                        src={iconSrc}
                                        alt="sidebar icon"
                                        width="80px"
                                        height="80px"
                                    />
                                </div>
                            )}
                            <div className={'brand-title'}>Handyheart.</div>
                        </>
                    )}
                </Link>
            </div>
            {windowType === 'MOBILE' ? null : (
                <div className="nav-item-cont">
                    {pages}
                    <ToggleThemeButton transparent />
                </div>
            )}
        </div>
    )
}
export default SideBar
