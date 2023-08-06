import React from 'react';
import './navigation.css';
import { Link } from 'react-scroll';
import HomeIcon from './images/home.svg';
import ContactIcon from './images/contact.svg';
import PortfolioIcon from './images/portfolio.svg';
import CVIcon from './images/cv.svg';



export const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <li className='item'>
                <Link activeClass="active" to="home" spy={true} smooth={true} duration={500}>
                    <img src={HomeIcon} alt="HomeIcon" />
                </Link>
                </li>
                <li className='item'>
                <Link to="education" spy={true} smooth={true} duration={500}>
                    <img src={CVIcon} alt="CVIcon" />
                </Link>
                </li>
                <li className='item'>
                <Link to="portfolio" spy={true} smooth={true} duration={500}>
                    <img src={PortfolioIcon} alt="PortfolioIcon" />
                </Link>
                </li>
                <li className='item'>
                <Link to="contacts" spy={true} smooth={true} duration={500}>
                    <img src={ContactIcon} alt="ContactIcon" />
                </Link>
                </li>
            </ul>
        </nav>
    )
}