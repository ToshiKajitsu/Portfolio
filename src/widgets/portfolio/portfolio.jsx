import React, { useState } from 'react';
import './portfolio.css';
import { Element } from 'react-scroll';
import { PORTFOLIO_DATA, CATEGORIES } from '../../constants/portfolio';
import { PortfolioTabs } from '../../features/portfolioTabs/portfolioTabs';
import { PortfolioCard } from '../../shared/portfolioCard/portfolioCard';
import { Header } from '../../shared/header/header';
import { Paragraph } from '../../shared/paragraph/paragraph';


export const Portfolio = ({data}) => {
    const [portfolioData, setPortfolioData] = useState(PORTFOLIO_DATA);
    const renderCards = (data) => {
        return data.map((item, index) => <PortfolioCard data={item} key={`${index}_card`} />)
    };

    const handleTabClick =(category) => {
        if (category === CATEGORIES[0]) {
            setPortfolioData(PORTFOLIO_DATA)
        } else {
            const newData = PORTFOLIO_DATA.filter(item => item.category === category);
            setPortfolioData(newData);
        }
    }

    return (
        <Element name='portfolio' className="portfolio">
            <div  className='portfolioInfo'>
                <Header header={data.header} />
                <Paragraph align='center' text = {data.title} />
            </div>
            <PortfolioTabs onClick = {handleTabClick}/>
            <div className='styleContainer'>{renderCards(portfolioData)}</div>
        </Element>
    )
}