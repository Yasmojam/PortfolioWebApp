import React from 'react'
import '../styling/Fade.scss'

const FadeIn = ({ children }) => {
    return <div className={`animate fadeIn`}>{children}</div>
}

export default FadeIn
