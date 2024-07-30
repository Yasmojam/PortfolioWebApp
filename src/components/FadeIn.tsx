import '../styling/FadeIn.scss'

const FadeIn = ({ children }: { children: JSX.Element | JSX.Element[]}) => {
    return <div className={`animate fadeIn`} >{children}</div>
}

export default FadeIn
