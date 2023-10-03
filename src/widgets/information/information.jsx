import React from 'react';
import './information.css';
import Available from './images/available.png';
import Profile from './images/profile.svg'
import { SocialIcons } from '../../shared/socialIcons/socialIcons';

export const Information = () => {
    return (
        <div className="information">
            <div className="informationContainer">
                <div className="imgInformation">
                    <img src={Profile} alt="" />
                    <img className='imgStatus' src={Available} alt="" />
                </div>
                <h3 className='authorName' >Rayan Adlardard</h3>
                <p className='profession' >Font-end Developer</p>
                <SocialIcons />
                <div className="lineInformation"></div>
            </div>
            <div className="informationContainer"></div>
            <div className="informationContainer"></div>
            <div className="informationContainer"></div>
            <div className="informationContainer"></div>
            <button></button>
        </div>
    )
}