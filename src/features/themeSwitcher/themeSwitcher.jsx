import React from "react";
import { useTheme } from "../../processes/contextTheme";
import themeSwitcherIcon from './image/themeSwitcher.svg';
import './themeSwitcher.css';

export const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme();

    const handleClick = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
    return <div onClick={handleClick}>
        <ul>
            <li className="item_theme">
               <img className="themeSwitcherBG" src={themeSwitcherIcon} alt='themeSwitcherIcon' /> 
            </li>
        </ul>
        
    </div>
}