import React from 'react'
import preloader from './preloader.svg'
import './preloader.css'

//Create a preloader component //
const isPreloader = (isFetching) => {
    return (
    <>{isFetching ? <img id='preloader' style={{opacity: '25%'}} src={preloader} alt='preloader'></img> : null}</>
    )
}

export default isPreloader