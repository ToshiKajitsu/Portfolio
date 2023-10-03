import React from 'react';
import './socialIcons.css'
import Dribble from './img/dribbble.svg';
import Facebook from './img/facebook.svg';
import Instagram from './img/instagram.svg';
import Linkedin from './img/linkedin.svg';
import Twitter from './img/twitter.svg';
import Youtube from './img/youtube.svg';

export const SocialIcons = () => {
    return (
        <div className='socialIconsInformation' >
            <ul>
                <li className='socialIcons__item'>
                    <a href="https://facebook.com/">
                        <img src={Facebook} alt="Facebook" />
                    </a>
                </li>
                <li className='socialIcons__item'>
                    <a href="https://instagram.com/">
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </li>
                <li className='socialIcons__item'>
                    <a href="https://twitter.com/">
                        <img src={Twitter} alt="Twitter" />
                    </a>
                </li>
                <li className='socialIcons__item'>
                    <a href="https://linkedin.com/">
                        <img src={Linkedin} alt="Linkedin" />
                    </a>
                </li>
                <li className='socialIcons__item'>
                    <a href="https://www.youtube.com/">
                        <img src={Youtube} alt="Youtube" />
                    </a>
                </li>
                <li className='socialIcons__item'>
                    <a href="https://dribbble.com/">
                        <img src={Dribble} alt="Dribble" />
                    </a>
                </li>
            </ul>
        </div>
    )
}