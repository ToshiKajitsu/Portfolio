import React from 'react';
import './portfolioTabs.css';
import { CATEGORIES } from '../../constants/portfolio';

export const PortfolioTabs = ({onClick}) => {
    const tabs = CATEGORIES.map(item => 
    <div className='portfolioTab' 
        key={item} 
        onClick={() => {onClick(item)}}
    >
        {item}
    </div>
    );

    return (
        <div className='portfolioTabs'>{tabs}</div>
    )
};