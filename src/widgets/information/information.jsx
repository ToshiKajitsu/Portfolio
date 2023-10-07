import React from 'react';
import './information.css';
import Available from './images/available.png';
import Profile from './images/profile.svg'
import { SocialIcons } from '../../shared/socialIcons/socialIcons';
import { AboutMe } from '../../shared/aboutMe/aboutMe';
import { ProgressBar } from '../../shared/progressBar/progressBar';
import { ExtraSkills } from '../../shared/extraSkills/extraSkills';
import DownloadCV from './images/downloadCV.svg';
import { useTheme } from '../../processes/contextTheme';

export const Information = () => {
    const {theme} = useTheme();
    return (
        <div className={`information information_${theme}`}>
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
            <div className="informationContainer">
                <AboutMe />
                <div className="lineInformation"></div>
            </div>
            <div className="informationContainer">
                <h4>Languages</h4>
                <ProgressBar name='Bangla' data='100' />
                <ProgressBar name='English' data='80' />
                <ProgressBar name='Spanish' data='60' />
                <div className="lineInformation"></div>
            </div>
            <div className="informationContainer">
                <h4>Skills</h4>
                <ProgressBar name='Html' data='95' />
                <ProgressBar name='Css' data='85' />
                <ProgressBar name='Js' data='80' />
                <ProgressBar name='PHP' data='75' />
                <ProgressBar name='WordPress' data='85' />
                <div className="lineInformation"></div>
            </div>
            <div className="informationContainer">
                <h4>Extra Skills</h4>
                <ExtraSkills name='Bootstrap, Materialize' />
                <ExtraSkills name='Stylus, Sass, Less' />
                <ExtraSkills name='Gulp, Webpack, Grunt' />
                <ExtraSkills name='GIT Knowledge' />
                <div className="lineInformation"></div>
            </div>
            <button>Download cv <img src={DownloadCV} alt="" /> </button>
        </div>
    )
}