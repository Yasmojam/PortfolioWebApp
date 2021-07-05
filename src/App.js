import React from 'react'
import './styling/App.css'
import SideBar from './components/SideBar'
import SlideShow from './components/SlideShow'
import { PageContextProvider } from './context/PageContexProvider'
import { BrowserRouter, Route } from 'react-router-dom'
import About from './components/About'
import ImageGrid from './components/ImageGrid'
import PortfolioPage from './components/PortfolioPage'

const App = () => {
    return (
        <PageContextProvider>
            <BrowserRouter>
                <div className="App">
                    <div className={'site-cont'}>
                        <div className={'side-content-cont'}>
                            <div className={'sidebar-col'}>
                                <SideBar />
                            </div>
                            <div className={'content-col'}>
                                <Route path="/" exact component={SlideShow} />
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
                            <div className={'footer-text'}>
                                Handyheart © 2021
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </PageContextProvider>
    )
}

export default App
