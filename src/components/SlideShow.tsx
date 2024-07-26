import React, { useEffect, useRef, useState } from 'react'
import '../styling/SlideShow.scss'
import { useSlideShowArtworks } from '../api/queries'

/**
 * Component which represents web application front page slide show.
 */
const SlideShow = () => {
    const {data: slides} = useSlideShowArtworks()
    const nodeRef = useRef(null)
    const [showSlideShow, setShowSlideShow] = useState(false)
    const [index, setIndex] = useState(0)
    const delay = 2500
    const timeoutRef = useRef(null)

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
                                    src={slide.url}
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
    )
}

export default SlideShow
