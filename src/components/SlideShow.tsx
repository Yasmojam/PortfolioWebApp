import React, { useState } from 'react'
import '../styling/SlideShow.scss'
import { useSlideShowArtworks } from '../api/queries'
import FadeIn from './FadeIn'
/**
 * Component which represents web application front page slide show.
 */
const SlideShow = () => {
    const { data: slides, isFetchedAfterMount } = useSlideShowArtworks()
    const [hoveredIndex, setHoveredIndex] = useState(null)

    return (
        isFetchedAfterMount && (
            <FadeIn key={'slide-show'}>
                <div className="slideshow">
                    <div className="slideshowSlider">
                        {slides.map((slide, index) => (
                            <img
                                className={
                                    hoveredIndex === null
                                        ? 'slide slide-image'
                                        : hoveredIndex === index
                                          ? 'slide slide-image selected'
                                          : 'slide slide-image-hidden'
                                }
                                alt={slide.title}
                                src={slide.url}
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onTouchStart={() => setHoveredIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </FadeIn>
        )
    )
}

export default SlideShow
function useRouteMatch() {
    throw new Error('Function not implemented.')
}
