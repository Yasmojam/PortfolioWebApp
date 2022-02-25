import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithubSquare,
    faInstagram,
    faTumblrSquare,
} from '@fortawesome/free-brands-svg-icons'
import { CSSTransition } from 'react-transition-group'
import backend from '../api/backend'
import '../styling/About.scss'
import { useWindowType } from '../hooks/window'
/**
 * About page component.
 */
const About = () => {
    const nodeRef = useRef(null)
    const windowType = useWindowType()
    const [showAbout, setShowAbout] = useState(false)
    const baseURl = process.env.REACT_APP_API_URL
    const [aboutImgSrc, setAboutImgSrc] = useState('')
    const retrieveData = useCallback(async () => {
        await backend
            .get('/api/artworks/tags/about-page')
            .then((res) => {
                const artwork = res.data.data[0]
                // console.log("fetched response: " + JSON.stringify(artwork));

                setAboutImgSrc(
                    `${baseURl}/img/${artwork.medium}/${artwork.image}`
                )
            })
            .catch((e) => {
                console.log(JSON.stringify(e))
            })
    }, [baseURl])

    useEffect(() => {
        retrieveData()
    }, [retrieveData])

    useEffect(() => {
        setTimeout(() => setShowAbout(true))
    }, [])

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={showAbout}
            appear={true}
            enter={true}
            exit={true}
            timeout={1000}
            classNames="fade"
            unmountOnExit
        >
            <div className="about-cont" ref={nodeRef}>
                <div
                    className={
                        windowType === 'MOBILE'
                            ? 'image-text-cont-mobile'
                            : 'image-text-cont-desktop'
                    }
                >
                    <img id={'aboutImgSrc'} src={aboutImgSrc} alt={'About'} />
                    <div className={'text-links-cont'}>
                        <div
                            className={
                                windowType === 'MOBILE'
                                    ? 'about-text-mobile'
                                    : 'about-text-desktop'
                            }
                        >
                            <p>
                                I'm Yasmin, an illustrator and software
                                developer based in Glasgow.
                            </p>
                            <p>Want to connect?</p>
                            <p>
                                Email me at: {''}
                                <a
                                    style={{ color: 'black' }}
                                    href="mailto:handyheart.art@gmail.com"
                                >
                                    handyheart.art@gmail.com
                                </a>
                            </p>
                        </div>
                        <div className="social-cont">
                            <a href="https://www.instagram.com/handyheart_art/">
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className={'social-logos'}
                                />
                            </a>
                            <a href="https://handyheart.tumblr.com/">
                                <FontAwesomeIcon
                                    icon={faTumblrSquare}
                                    className={'social-logos'}
                                />
                            </a>
                            <a href="https://github.com/Yasmojam">
                                <FontAwesomeIcon
                                    icon={faGithubSquare}
                                    className={'social-logos'}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}
export default About
