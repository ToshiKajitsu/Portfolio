import React from 'react';
import './paragraph.css';
import { useTheme } from '../../processes/contextTheme';

export const Paragraph = ({text, align}) => {
    const alignText = align === 'center' ? 'paragraphCenter' : '';
    const {theme} = useTheme();

    return <p className={`paragraph paragraph_${theme} ${alignText}`} >{text}</p>
}