import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelopeSquare,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import '../styling/About.scss'
import {
    faGithubSquare,
    faInstagram,
    faTumblrSquare,
} from '@fortawesome/free-brands-svg-icons'

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
    const aboutImgSrc = ''

    return (
        <div className="about-cont">
            <div className={'image-text-cont'}>
                <img id={'aboutImgSrc'} src={aboutImgSrc} alt={'About'} />
                <div className={'text-links-cont'}>
                    <div className={'about-text'}>
                        <p>
                            I'm Yasmin, an illustrator and software developer
                            based in Glasgow.
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
    )
}
export default About
