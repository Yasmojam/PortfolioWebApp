import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styling/SideBar.scss'
import { useWindowType } from '../hooks/window'
import Hamburger from 'hamburger-react'

/**
 * Component which represents web application side navigation bar.
 */
const SideBar = () => {
    const sideBarIcon = `${process.env.REACT_APP_API_URL}/img/digital/me_profile.jpg`

    const listOfPages = [
        { href: '/about', name: 'About' },
        { href: '/digital', name: 'Digital' },
        { href: '/traditional', name: 'Traditional' },
        { href: '/collections', name: 'Collections' },
    ]

    let location = useLocation().pathname
    const windowType = useWindowType()

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
            {windowType === 'MOBILE' ? (
                <Hamburger color={'#32302c'} />
            ) : (
                <div className="nav-item-cont">
                    {/*Dynamically create pages from list of pages*/}
                    {listOfPages.map((page, index) => {
                        return (
                            <Link
                                key={index}
                                className={
                                    location === page.href
                                        ? 'page-active'
                                        : 'page'
                                }
                                to={page.href}
                            >
                                {page.name}
                            </Link>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
export default SideBar
