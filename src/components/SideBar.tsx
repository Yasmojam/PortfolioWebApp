import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styling/SideBar.scss'
import { useWindowType } from '../utils/window'
import { listOfPages, sideBarIcon } from '../utils/shared'
import { PortfolioContext } from '../context/PortfolioContext'
import Hamburger from 'hamburger-react'

/**
 * Component which represents web application side navigation bar.
 */
const SideBar = () => {
    let location = useLocation().pathname
    const windowType = useWindowType()
    const context = useContext(PortfolioContext)
    const isOpen = context.isMenuOpen

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
                    <div className={'brand-icon-cont'}>
                        <img
                            className="sidebar-icon"
                            src={sideBarIcon}
                            alt="sidebar icon"
                            width="80px"
                            height="80px"
                        />
                    </div>
                    {windowType === 'MOBILE' ? (
                        <div className={'brand-title-mobile'}>
                            <div>Handy</div>
                            <div className={'brand-mobile-bot'}>heart.</div>
                        </div>
                    ) : (
                        <div className={'brand-title'}>Handyheart.</div>
                    )}
                </Link>
            </div>
            {windowType === 'MOBILE' ? null : (
                <div className="nav-item-cont">
                    {/*Dynamically create pages from list of pages*/}
                    {listOfPages.map((page, index) => {
                        if (page.title !== 'Home') {
                            return (
                                <Link
                                    key={index}
                                    className={
                                        location === page.to
                                            ? 'page-active'
                                            : 'page'
                                    }
                                    to={page.to}
                                >
                                    {page.title}
                                </Link>
                            )
                        }
                    })}
                </div>
            )}
        </div>
    )
}
export default SideBar
