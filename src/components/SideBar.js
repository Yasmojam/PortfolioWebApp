import React, { useEffect } from 'react'
import { useSelectedPage } from '../context/PageContexProvider'
import { Link } from 'react-router-dom'
import Images from '../assets/Images'
import '../styling/SideBar.css'

/**
 * Component which represents web application side navigation bar.
 */
const SideBar = () => {
    const pageContext = useSelectedPage()
    const selectedPage = useSelectedPage().page

    const listOfPages = [
        { href: '/about', name: 'About' },
        { href: '/digital', name: 'Digital' },
        { href: '/traditional', name: 'Traditional' },
        { href: '/collections', name: 'Collections' },
    ]

    /**
     * Hook will call when page rendered and never again.
     */
    useEffect(() => {
        // console.log("Page selected: " + selectedPage);
    }, [selectedPage])

    const clickHandler = (page) => {
        pageContext.setPage(page)
    }

    return (
        <div className="sidebar-options">
            <div className="nav-brand-cont">
                <div>
                    <Link
                        to={'/'}
                        className="brand"
                        onClick={() => {
                            clickHandler('')
                        }}
                    >
                        <div className={'brand-icon-cont'}>
                            <img
                                className="sidebar-icon"
                                src={Images.icon}
                                alt="sidebar icon"
                                width="80px"
                                height="80px"
                            />
                        </div>
                        <div>Handyheart.</div>
                    </Link>
                </div>
            </div>
            <div className="nav-item-cont">
                {/*Dynamically create pages from list of pages*/}
                {listOfPages.map((page, index) => {
                    if (selectedPage === page.href) {
                        return (
                            <Link
                                key={index}
                                className="page"
                                to={page.href}
                                onClick={() => {
                                    clickHandler(page.href)
                                }}
                            >
                                {page.name}
                            </Link>
                        )
                    } else {
                        return (
                            <Link
                                key={index}
                                className="page"
                                to={page.href}
                                onClick={() => {
                                    clickHandler(page.href)
                                }}
                            >
                                {page.name}
                            </Link>
                        )
                    }
                })}
            </div>
        </div>
    )
}
export default SideBar
