import React from 'react';
import './place.css';
import PlaceIcon from './placeIcon.svg'

export const Place = () => {
    return (
        <div className='placeContainer'>
            <ul className='imgPosition'>
                <li className='iconPlace'>
                  <img src={PlaceIcon} alt="HomeIcon" />  
                </li>
            </ul>
            <div className="placeWrapper">
                <p className='mainData' >Country:</p>
                <p className='ofData' >Bangladesh</p>
            </div>
            <div className="placeWrapper">
                <p className='mainData'>Cit:</p>
                <p className='ofData'>Dhaka</p>
            </div>
            <div className="placeWrapper">
                <p className='mainData'>Streat:</p>
                <p className='ofData'>35 Vhatara, Badda</p>
            </div>
        </div>
    )
}