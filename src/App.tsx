import React, { useContext } from 'react'
import './styling/App.scss'
import SideBar from './components/SideBar'
import SlideShow from './components/SlideShow'
import About from './components/About'
import ImageGrid from './components/ImageGrid'
import PortfolioPage from './components/PortfolioPage'
import { Routes, Route } from 'react-router-dom'
import MobileMenu from './components/MobileMenu'
import Hamburger from 'hamburger-react'
import { PortfolioContext } from './context/PortfolioContext'
import { paths, sideBarIcon } from './utils/shared'
import { useWindowType } from './utils/window'
import './styling/SideBar.scss'

const App = () => {
    const windowType = useWindowType()
    const context = useContext(PortfolioContext)
    const isOpen = context.isMenuOpen

    return (
        <div className={'App'}>
            <>
                <div
                    style={
                        isOpen && windowType === 'MOBILE'
                            ? { display: 'none' }
                            : {}
                    }
                >
                    <div className={'site-cont'}>
                        <div className={'side-content-cont'}>
                            <div className={'sidebar-col'}>
                                <SideBar />
                            </div>
                            <div className={'content-col'}>
                                <Routes>
                                    <Route
                                        path={paths.HOME}
                                        element={<SlideShow />}
                                    />
                                    <Route
                                        path={paths.ABOUT}
                                        element={<About />}
                                    />
                                    <Route
                                        path={paths.DIGITAL}
                                        element={
                                            <ImageGrid type="digital-page" />
                                        }
                                    />
                                    <Route
                                        path={paths.TRADITIONAL}
                                        element={
                                            <ImageGrid type="traditional-page" />
                                        }
                                    />
                                    <Route
                                        path={paths.COLLECTIONS}
                                        element={<PortfolioPage />}
                                    />
                                </Routes>
                            </div>
                        </div>
                        <div className={'footer'}>
                            <div className={'footer-text'}>
                                Handyheart © 2022
                            </div>
                        </div>
                    </div>
                </div>
            </>
            {isOpen && windowType === 'MOBILE' ? <MobileMenu /> : null}

            {windowType === 'MOBILE' ? (
                <div className={'icon-hamburger'}>
                    <div className={'brand-icon-cont'}>
                        <img
                            className="sidebar-icon"
                            src={sideBarIcon}
                            alt="sidebar icon"
                            width="80px"
                            height="80px"
                        />
                        <div
                            className={'brand-title-mobile'}
                            style={isOpen ? { color: 'white' } : {}}
                        >
                            <div>Handy</div>
                            <div className={'brand-mobile-bot'}>heart.</div>
                        </div>
                    </div>
                    <div className={'burger-button'}>
                        <Hamburger
                            color={isOpen ? 'white' : '#32302c'}
                            toggled={isOpen}
                            onToggle={context.setMenuOpen}
                        />
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default App
