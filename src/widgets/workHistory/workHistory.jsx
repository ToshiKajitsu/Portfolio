import React from 'react';
import './workHistory.css';
import { Element } from 'react-scroll';
import { Header } from '../../shared/header/header';
import { Paragraph } from '../../shared/paragraph/paragraph';
import { WorkCard } from '../../features/workCard/workCard';
import { useTheme } from '../../processes/contextTheme';


export const WorkHistory = ({name, data}) => {
    const {theme} = useTheme();
    
    const mainInfo = data.history.map((work, index) => <WorkCard data={work} key={`work_${index}`} />)
    return (
        <Element name={name} className="workHistory">
            <div className={`headerInfo headerInfo_${theme}`}>
                <Header header={data.header} />
                <Paragraph align='center' text = {data.title} />
            </div>
            <div className={`mainInfo mainInfo_${theme}`}>{mainInfo}</div>
        </Element>
    )
}