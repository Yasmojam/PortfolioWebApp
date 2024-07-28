import React from 'react'
import '../styling/FadeIn.scss'

const FadeIn = ({ children }) => {
    return <div className={`animate fadeIn`}>{children}</div>
}

export default FadeIn
