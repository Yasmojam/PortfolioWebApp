import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGithubSquare,
    faInstagram,
    faTumblrSquare,
} from '@fortawesome/free-brands-svg-icons'
import {
    faEnvelopeSquare,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group'
import backend from '../api/backend'
import '../styling/About.scss'

interface SocialLogoProps {
    href: string
    icon: IconDefinition
}
const SocialLogo = ({ href, icon }: SocialLogoProps) => {
    return (
        <a href={href}>
            <FontAwesomeIcon icon={icon} className={'social-logo'} />
        </a>
    )
}

/**
 * About page component.
 */
const About = () => {
    const nodeRef = useRef(null)
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
                <div className={'image-text-cont'}>
                    <img id={'aboutImgSrc'} src={aboutImgSrc} alt={'About'} />
                    <div className={'text-links-cont'}>
                        <div className={'about-text'}>
                            <p>
                                I'm Yasmin, an illustrator and software
                                developer based in Glasgow.
                            </p>
                        </div>
                        <div className="social-cont">
                            <div className="social-cont-title">
                                Want to connect?
                            </div>
                            <div className={'social-logos-container'}>
                                <SocialLogo
                                    href="mailto:handyheart.art@gmail.com"
                                    icon={faEnvelopeSquare}
                                />
                                <SocialLogo
                                    href="https://www.instagram.com/handyheart_art/"
                                    icon={faInstagram}
                                />
                                <SocialLogo
                                    href="https://handyheart.tumblr.com/"
                                    icon={faTumblrSquare}
                                />
                                <SocialLogo
                                    href="https://github.com/Yasmojam"
                                    icon={faGithubSquare}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}
export default About
