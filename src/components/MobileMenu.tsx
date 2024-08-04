import { useContext } from 'react'
import '../styling/MobileMenu.scss'
import { PortfolioContext } from '../context/PortfolioContext'
import { Link } from 'react-router-dom'
import { listOfPages } from '../utils/shared'
import FadeIn from './FadeIn'
import { ToggleThemeButton } from './ToggleThemeButton'
const MobileMenu = () => {
    const context = useContext(PortfolioContext)
    const clickHandler = () => {
        context?.setMenuOpen?.(false)
    }
    return (
        <FadeIn key={'mobile-menu'}>
            <div className={'Menu'}>
                {listOfPages.map((page, index) => {
                    return (
                        <Link key={index} to={page.to} onClick={clickHandler}>
                            {page.title}
                        </Link>
                    )
                })}
                <ToggleThemeButton />
            </div>
        </FadeIn>
    )
}
export default MobileMenu
