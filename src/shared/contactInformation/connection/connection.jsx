import React from 'react';
import './connection.css';
import ConnectionIcon from './connectionIcon.svg'
import { useTheme } from '../../../processes/contextTheme';

export const Connection = () => {
    const {theme} = useTheme();
    return (
        <div className={`connectionContainer connectionContainer_${theme}`}>
            <ul className='imgPosition'>
                <li className='iconConnection'>
                  <img src={ConnectionIcon} alt="HomeIcon" />  
                </li>
            </ul>
            <div className="connectionWrapper">
                <p className='mainData' >Email:</p>
                <p className='ofData' >youremail@gmail.com</p>
            </div>
            <div className="connectionWrapper">
                <p className='mainData'>Skype:</p>
                <p className='ofData'>@yourusername</p>
            </div>
            <div className="connectionWrapper">
                <p className='mainData'>Telegram:</p>
                <p className='ofData'>@yourusername</p>
            </div>
        </div>
    )
}