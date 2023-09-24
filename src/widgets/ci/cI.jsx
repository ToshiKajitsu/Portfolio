import React from 'react';
import './cI.css';
import { Element } from 'react-scroll';
import { Form } from '../../features/form/form';
import { Header } from '../../shared/header/header';
import { Place } from '../../shared/contactInformation/place/place';
import { Connection } from '../../shared/contactInformation/connection/connection';
import { Support } from '../../shared/contactInformation/support/support';


export const ContactInformation = ({data}) => {
    return (
        <Element name='contacts' className="contactInformation">
            <div className="ciWrapper">
                <div className="ciBlock">
                    <Header className='headerCI' header={data.form.header} />
                    <Form /> 
                </div>
                <div className="ciBlock">
                    <Header className='headerCI' header={data.ci.header} />
                    <Place />
                    <Connection />
                    <Support />
                </div>
               
            </div>
        </Element>
    )
}