import React from 'react';
import './cI.css';
import { Element } from 'react-scroll';
import { Form } from '../../features/form/form';
import { Header } from '../../shared/header/header';
import { Place } from '../../shared/contactInformation/place/place';


export const ContactInformation = ({data}) => {
    return (
        <Element name='contacts' className="contactInformation">
            <div className="ciWrapper">
                <div className="formBlock">
                    <Header header={data.form.header} />
                    <Form />
                </div>
                <div className="ciBlock">
                    <Header header={data.ci.header} />
                    <div className="ciCard">
                        <Place />
                    </div>
                </div>
            </div>
        </Element>
    )
}