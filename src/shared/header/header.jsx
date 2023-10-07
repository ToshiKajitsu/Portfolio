import React from 'react';
import './header.css';
import { useTheme } from '../../processes/contextTheme';

export const Header = ({header}) => {
    const {theme} = useTheme();
    return (
    <h2 className={`headerSecondary headerSecondary_${theme}`}>{header}</h2>
    )
}