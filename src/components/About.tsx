import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelopeSquare,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons'
import '../styling/About.scss'
import '../styling/typography.scss'
import {
    faGithubSquare,
    faInstagram,
    faTumblrSquare,
} from '@fortawesome/free-brands-svg-icons'
import { useAboutInfo } from '../api/queries'
import FadeIn from './FadeIn'
import DOMPurify from 'dompurify'

interface SocialLogoProps {
    href: string
    icon: IconDefinition
}

const socialLogos = [
    { href: 'mailto:handyheart.art@gmail.com', icon: faEnvelopeSquare },
    { href: 'https://www.instagram.com/handyheart_art/', icon: faInstagram },
    { href: 'https://handyheart.tumblr.com/', icon: faTumblrSquare },
    { href: 'https://github.com/Yasmojam', icon: faGithubSquare },
]

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
    const { data: aboutInfo } = useAboutInfo()
    return (
        aboutInfo && (
            <FadeIn key={'about-page-fade'}>
                <div className="about-cont">
                    <img
                        id={'aboutImgSrc'}
                        src={aboutInfo.artwork.url}
                        alt={'About'}
                    />
                    <div className={'text-links-cont'}>
                        <div className="about-text-cont">
                            <div
                                style={{
                                    paddingBottom: '8px',
                                    borderBottom: `1px solid var(--primary-color)`,
                                }}
                            >
                                <text className="heading">
                                    Hey there, I’m Yas!
                                </text>
                            </div>
                            <text
                                className="about-text"
                                dangerouslySetInnerHTML={{
                                    __html: DOMPurify.sanitize(
                                        aboutInfo.description
                                    ),
                                }}
                            />
                        </div>
                        <div className="social-cont">
                            <div className="social-cont-title">
                                Commission shop:
                            </div>
                            <a href="https://ko-fi.com/handyheart/commissions">
                                <img
                                    src={'../src/assets/light-kofi.png'}
                                    height={40}
                                    alt={'comission-me-on-kofi'}
                                />
                            </a>
                            <div className="social-cont-title">Contact me:</div>
                            <div className={'social-logos-container'}>
                                {socialLogos.map((socialLogo, index) => (
                                    <SocialLogo
                                        key={`social-logo-${index}`}
                                        href={socialLogo.href}
                                        icon={socialLogo.icon}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        )
    )
}
export default About
