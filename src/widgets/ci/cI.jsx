import React from 'react';
import './cI.css';
import { Element } from 'react-scroll';
import { Form } from '../../features/form/form';


export const ContactInformation = () => {
    return (
        <Element name='contacts' className="contactInformation">
            <Form />
        </Element>
    )
}