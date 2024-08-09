import { useContext } from 'react'
import './styling/App.scss'
import SideBar from './components/SideBar'
import { useRoutes, Outlet } from 'react-router-dom'
import MobileMenu from './components/MobileMenu'
import Hamburger from 'hamburger-react'
import { PortfolioContext } from './context/PortfolioContext'
import { useWindowType } from './utils/window'
import './styling/SideBar.scss'
import { useIcon } from './api/queries'
import { MediumType, paths } from './utils/shared'
import About from './components/About'
import MediumPage from './components/MediumPage'
import PortfolioPage from './components/PortfolioPage'
import SlideShow from './components/SlideShow'

const Container = () => {
    const windowType = useWindowType()
    const context = useContext(PortfolioContext)
    const isOpen = context.isMenuOpen
    const { data: icon } = useIcon()

    return (
        <>
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
                            <Outlet />
                        </div>
                        <div className={'footer'}>
                            <text className={'footer-text'}>
                                Handyheart © {new Date().getFullYear()}
                            </text>
                        </div>
                    </div>
                </div>
            </>
            {isOpen && windowType === 'MOBILE' ? <MobileMenu /> : null}

            {windowType === 'MOBILE' ? (
                <div className={'icon-hamburger'}>
                    {icon && (
                        <div className={'brand-icon-cont'}>
                            <img
                                className="sidebar-icon"
                                src={icon.url}
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
                    )}
                    <div className={'burger-button'}>
                        <Hamburger
                            color={isOpen ? 'white' : undefined}
                            toggled={isOpen}
                            onToggle={context.setMenuOpen}
                        />
                    </div>
                </div>
            ) : null}
        </>
    )
}

const AppRoutes = () => {
    const element = useRoutes([
        {
            path: '/',
            element: <Container />,
            children: [
                { path: paths.HOME, element: <SlideShow /> },
                { path: paths.ABOUT, element: <About /> },
                {
                    path: paths.DIGITAL,
                    element: <MediumPage medium={MediumType.DIGITAL} />,
                },
                {
                    path: paths.TRADITIONAL,
                    element: <MediumPage medium={MediumType.TRADITIONAL} />,
                },
                { path: paths.COLLECTIONS, element: <PortfolioPage /> },
            ],
        },
    ])
    return element
}

export default AppRoutes
