import React from 'react';
import './progressBar.css';

export const ProgressBar = ({name, data}) => {
    const width = {
        width: `${data}%`
    }
    return (
        <div className="progressBarContainer">
            <div className="nameProgressBar">
                <p>{name}</p>
                <p>{data}%</p>
            </div>
            <div className="mainProgressBar">
                <span style={width} ></span>
            </div>
        </div>
    )
}