import React from 'react';
import './workHistory.css';
import { Element } from 'react-scroll';
import { Header } from '../../shared/header/header';
import { Paragraph } from '../../shared/paragraph/paragraph';
import { WorkCard } from '../../features/workCard/workCard';


export const WorkHistory = ({name, data}) => {

    const mainInfo = data.history.map((work, index) => <WorkCard data={work} key={`work_${index}`} />)
    return (
        <Element name={name} className="workHistory">
            <div className='headerInfo'>
                <Header header={data.header} />
                <Paragraph align='center' text = {data.title} />
            </div>
            
            <div className="mainInfo">{mainInfo}</div>
        </Element>
    )
}