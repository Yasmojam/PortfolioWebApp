import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithubSquare,
    faInstagram,
    faTumblrSquare,
} from '@fortawesome/free-brands-svg-icons'
import { CSSTransition } from 'react-transition-group'
import backend from '../api/backend'
import '../styling/About.css'
/**
 * About page component.
 */
const About = () => {
    const nodeRef = useRef(null)
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
    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={true}
            appear={true}
            timeout={300}
            classNames="fade"
            unmountOnExit
        >
            <div className="about-cont" ref={nodeRef}>
                <div className={'image-text-cont'}>
                    <img id={'aboutImgSrc'} src={aboutImgSrc} alt={'About'} />
                    <div className={'text-links-cont'}>
                        <div className="about-text">
                            <p>
                                I'm Yasmin, an illustrator and software
                                developer based in Glasgow. Currently, open for
                                commissions.
                            </p>
                            <p>Want to connect?</p>
                            <p>
                                Email me at: {''}
                                <a
                                    style={{ color: 'black' }}
                                    href="mailto:handyheart_art@gmail.com"
                                >
                                    handyheart_art@gmail.com
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
