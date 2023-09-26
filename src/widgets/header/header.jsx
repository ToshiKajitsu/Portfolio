import React from 'react';
import './header.css';
import { Element } from 'react-scroll';
import { Paragraph } from '../../shared/paragraph/paragraph';
import YourImage  from './yourImage.svg'


export const Header = () => {
    return (
        <Element name='home' className="header">
            <div className="mainHeader">
                <h1>I’m Rayan Adlrdard <span>Front-end</span> Developer</h1>
                <Paragraph text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.' />
                <button>HIRE ME</button>
            </div>
            <img src={YourImage} alt="img" />
        </Element>
    )
}