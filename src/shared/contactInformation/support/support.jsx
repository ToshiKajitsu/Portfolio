import React from 'react';
import './support.css';
import SupportIcon from './supportIcon.svg'

export const Support = () => {
    return (
        <div className='supportContainer'>
            <ul className='imgPosition'>
                <li className='iconSupport'>
                  <img src={SupportIcon} alt="HomeIcon" />  
                </li>
            </ul>
            <div className="supportWrapper">
                <p className='mainData' >Support services:</p>
                <p className='ofData' >15369</p>
            </div>
            <div className="supportWrapper">
                <p className='mainData'>Office:</p>
                <p className='ofData'>+58 (021)356 587 235</p>
            </div>
            <div className="supportWrapper">
                <p className='mainData'>Personal:</p>
                <p className='ofData'>+58 (021)356 587 235</p>
            </div>
        </div>
    )
}