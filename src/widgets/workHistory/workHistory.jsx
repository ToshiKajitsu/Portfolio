import React from 'react';
import './workHistory.css';
import { Element } from 'react-scroll';


export const WorkHistory = ({name}) => {
    return (
        <Element name={name} className="workHistory">Work History</Element>
    )
}