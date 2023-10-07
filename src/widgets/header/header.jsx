import React from 'react';
import './header.css';
import { Element } from 'react-scroll';
import YourImage  from './yourImage.svg';
import { useTheme } from '../../processes/contextTheme';
import HeaderSvg from './headerArrow.svg'
import EllipseOne from './image/EllipseOne.svg';
import EllipseTwo from './image/EllipseTwo.svg';
import EllipseThree from './image/EllipseThree.svg';
import EllipseFour from './image/EllipseFour.svg';
import RectangleOne from './image/RectangleOne.svg';
import RectangleTwo from './image/RectangleTwo.svg';
import Polygon from './image/Polygon.svg';

export const Header = () => {
    const {theme} = useTheme();
    return (
        <Element name='home' className={`header header_${theme}`}>
            <img className='ellipseOne sizeIcon' src={EllipseOne} alt="" />
            <img className='ellipseTwo sizeIcon' src={EllipseTwo} alt="" />
            <img className='ellipseThree sizeIcon' src={EllipseThree} alt="" />
            <img className='ellipseFour sizeIcon' src={EllipseFour} alt="" />
            <img className='rectangleOne sizeIcon' src={RectangleOne} alt="" />
            <img className='rectangleTwo sizeIcon' src={RectangleTwo} alt="" />
            <img className='polygon sizeIcon' src={Polygon} alt="" />
            <div className="mainHeader">
                <h1 className={`greetings greetings_${theme}`} >I’m Rayan Adlrdard <span>Front-end</span> Developer</h1>
                <p className='paragraphHeader'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</p>
                <button className='headerButton' >HIRE ME <img className='arrow' src={HeaderSvg} alt=""/></button>
            </div>
            <img className='yourImage' src={YourImage} alt="img" />
        </Element>
    )
}