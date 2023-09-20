import React from 'react';
import './place.css';
import PlaceIcon from './placeIcon.svg'

export const Place = () => {
    return (
        <div className='placeContainer'>
            <ul>
                <li className='iconPlace'>
                  <img src={PlaceIcon} alt="HomeIcon" />  
                </li>
            </ul>
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