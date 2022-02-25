import React, { useRef, useState } from 'react'
import './styling/App.scss'
import SideBar from './components/SideBar'
import SlideShow from './components/SlideShow'
import About from './components/About'
import ImageGrid from './components/ImageGrid'
import PortfolioPage from './components/PortfolioPage'
import { useOnClickOutside } from './hooks/hooks'
import { Route } from 'react-router'

const App = () => {
    const [open, setOpen] = useState(false)
    const node = useRef()
    const menuId = 'main-menu'

    useOnClickOutside(node, () => setOpen(false))
    return (
        <>
            <div ref={node} />
            <div className="App">
                <div className={'site-cont'}>
                    <div className={'side-content-cont'}>
                        <div className={'sidebar-col'}>
                            <SideBar />
                        </div>
                        <div className={'content-col'}>
                            <Route exact path="/" component={SlideShow} />
                            <Route path="/about" component={About} />
                            <Route
                                path="/digital"
                                component={() => (
                                    <ImageGrid type="digital-page" />
                                )}
                            />
                            <Route
                                path="/traditional"
                                component={() => (
                                    <ImageGrid type="traditional-page" />
                                )}
                            />
                            <Route
                                path="/collections"
                                component={() => <PortfolioPage />}
                            />
                        </div>
                    </div>
                    <div className={'footer'}>
                        <div className={'footer-text'}>Handyheart © 2021</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
