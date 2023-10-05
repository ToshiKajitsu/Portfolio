import React from 'react';
import './extraSkills.css';
import ExtraSkillsImg from './img/extraSkillsImg.svg';

export const ExtraSkills = ({name}) => {
    return (
        <div className="extraSkillsContainer">
            <img src={ExtraSkillsImg} alt="Img" />
            <p>{name}</p>
        </div>
    )
}