import React from 'react'
import preloader from './preloader.svg'

//Create a preloader component //
const isPreloader = (isFetching) => {
    debugger
    return (
    <>{isFetching ? <img className='users-preloader' src={preloader} alt='preloader'></img> : null}</>
    )
}

export default isPreloader