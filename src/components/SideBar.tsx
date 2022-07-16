import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styling/SideBar.scss'
import { useWindowType } from '../utils/window'
import { listOfPages, sideBarIcon } from '../utils/shared'

/**
 * Component which represents web application side navigation bar.
 */
const SideBar = () => {
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
                            <div className={'brand-icon-cont'}>
                                <img
                                    className="sidebar-icon"
                                    src={sideBarIcon}
                                    alt="sidebar icon"
                                    width="80px"
                                    height="80px"
                                />
                            </div>
                            <div className={'brand-title'}>Handyheart.</div>
                        </>
                    )}
                </Link>
            </div>
            {windowType === 'MOBILE' ? null : (
                <div className="nav-item-cont">
                    {/*Dynamically create pages from list of pages*/}
                    {pages}
                </div>
            )}
        </div>
    )
}
export default SideBar
