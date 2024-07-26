import React from "react"
import '../styling/Spinner.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSlash } from "@fortawesome/free-solid-svg-icons"

export const Spinner = () => {
return <div className="container"><FontAwesomeIcon icon={faSlash} className="spinner"/></div>
}