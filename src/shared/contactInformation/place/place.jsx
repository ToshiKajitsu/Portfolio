import React from 'react';
import './place.css';

export const Place = () => {
    return (
        <div className='placeContainer'>
            <img src='' alt="HomeIcon" />
            <div className="placeWrapper">
                <p>Country:</p>
                <p>Bangladesh</p>
            </div>
            <div className="placeWrapper">
                <p>Cit:</p>
                <p>Dhaka</p>
            </div>
            <div className="placeWrapper">
                <p>Streat:</p>
                <p>35 Vhatara, Badda</p>
            </div>
        </div>
    )
}