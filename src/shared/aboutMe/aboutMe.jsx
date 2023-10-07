import React from 'react';
import './aboutMe.css';

export const AboutMe = () => {
    return (
        <div className="aboutMeContainer">
            <div className="aboutMeWrapper">
                <p><span>Age:</span></p>
                <p>24</p>
            </div>
            <div className="aboutMeWrapper">
                <p><span>Residence:</span></p>
                <p>BD</p>
            </div>
            <div className="aboutMeWrapper">
                <p><span>Freelanse:</span></p>
                <p className='aboutMeStatus' >Available</p>
            </div>
            <div className="aboutMeWrapper">
                <p><span>Address:</span></p>
                <p>Dhaka,Bangladesh</p>
            </div>
        </div>
    )
}