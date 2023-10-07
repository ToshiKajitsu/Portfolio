import React from 'react';
import './footer.css';
import { useTheme } from '../../processes/contextTheme';

export const Footer = () => {
    const {theme} = useTheme();
    return (
        <div className={`footer footer_${theme}`}>
            <p>2021 All Rights Reserved.Ojjomedia</p>
        </div>
    )
}