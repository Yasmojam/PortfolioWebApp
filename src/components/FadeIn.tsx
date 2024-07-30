import '../styling/FadeIn.scss'

const FadeIn = ({ children, key }: { children: JSX.Element | JSX.Element[], key:string }) => {
    return <div className={`animate fadeIn`} key={key}>{children}</div>
}

export default FadeIn
