import React from 'react';
import './information.css';
import Available from './images/available.png';
import Profile from './images/profile.svg'

export const Information = () => {
    return (
        <div className="information">
            <div className="informationContainer">
                <div className="imgInformation">
                    <img src={Profile} alt="" />
                    <img className='imgStatus' src={Available} alt="" />
                </div>
                <h3>Rayan Adlardard</h3>
                <p>Font-end Developer</p>
                <div className="socialIconsInformation">

                </div>
            </div>
            <div className="informationContainer"></div>
            <div className="informationContainer"></div>
            <div className="informationContainer"></div>
            <div className="informationContainer"></div>
            <button></button>
        </div>
    )
}