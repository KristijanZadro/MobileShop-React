import React from 'react'
import loadingGif from '../Gif/loading-arrow.gif'
import '../App.css'


export default function Loading() {
    return (
        <div className="loading">
            <img src={loadingGif} alt="loading" />
        </div>
    )
}
