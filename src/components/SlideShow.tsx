import '../styling/SlideShow.scss'
import { useSlideShowArtworks } from '../api/queries'
import FadeIn from './FadeIn'
/**
 * Component which represents web application front page slide show.
 */
const SlideShow = () => {
    const { data: slides, isFetchedAfterMount } = useSlideShowArtworks()

    return (
        isFetchedAfterMount &&
        slides && (
            <FadeIn key={'slide-show'}>
                <div className="slideshow">
                    <div className="slideshowSlider">
                        {slides.map((slide, index) => (
                            <img
                                className={'slide-image'}
                                alt={slide.title}
                                src={slide.url}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </FadeIn>
        )
    )
}

export default SlideShow
