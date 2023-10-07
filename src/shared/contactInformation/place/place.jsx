import React from 'react';
import './place.css';
import PlaceIcon from './placeIcon.svg';
import { useTheme } from '../../../processes/contextTheme';

export const Place = () => {
    const {theme} = useTheme();
    return (
        <div className={`placeContainer placeContainer_${theme}`}>
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