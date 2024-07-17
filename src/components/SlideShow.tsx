import React, { useCallback, useEffect, useRef, useState } from 'react'
import '../styling/SlideShow.scss'
import { CSSTransition } from 'react-transition-group'
import backend from '../api/backend'
import { ArtworkSchema } from '../api/apiTypes'
import { AxiosResponse } from 'axios'

/**
 * Component which represents web application front page slide show.
 */
const SlideShow = () => {
    const nodeRef = useRef(null)
    const [showSlideShow, setShowSlideShow] = useState(false)
    const [slides, setSlides] = useState([])
    const [index, setIndex] = useState(0)
    const delay = 2500
    const baseURl = process.env.REACT_APP_API_URL
    const timeoutRef = useRef(null)

    const retrieveData = useCallback(async () => {
        await backend.get<{data:ArtworkSchema[]}>('api/get-front-page-artworks').then((res) => {
            console.log("RESPONSE", res)
            setSlides(res.data.data)
        })
    }, [])

    useEffect(() => {
        retrieveData()
    }, [retrieveData])

    useEffect(() => {
        setTimeout(() => setShowSlideShow(true))
    }, [])

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        )

        return () => {
            resetTimeout()
        }
    }, [index, slides])

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={showSlideShow}
            appear={true}
            enter={true}
            exit={true}
            timeout={1000}
            classNames="fade"
            unmountOnExit
        >
            <div className={'entire-slideshow'} ref={nodeRef}>
                <div className="slideshow">
                    <div
                        className="slideshowSlider"
                        style={{
                            transform: `translate3d(${-index * 100}%, 0, 0)`,
                        }}
                    >
                        {slides.map((slide, index) => (
                            <div key={index} className={'slide'}>
                                <img
                                    className="slide-image"
                                    alt={slide.title}
                                    src={`${baseURl}/${slide.url}`}
                                />
                            </div>
                        ))}
                    </div>

                    <div className="slideshowDots">
                        {slides.map((_, idex) => (
                            <span
                                key={idex}
                                className={`dot${
                                    index === idex ? ' active' : ''
                                }`}
                                onClick={() => {
                                    setIndex(idex)
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default SlideShow
