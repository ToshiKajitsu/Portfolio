import React, { useState } from 'react';
import './portfolio.css';
import { Element } from 'react-scroll';
import { PORTFOLIO_DATA, CATEGORIES } from '../../constants/portfolio';
import { PortfolioTabs } from '../../features/portfolioTabs/portfolioTabs';
import { PortfolioCard } from '../../shared/portfolioCard/portfolioCard';


export const Portfolio = () => {
    const [portfolioData, setPortfolioData] = useState(PORTFOLIO_DATA);
    const renderCards = (data) => {
        return data.map((item, index) => <PortfolioCard data={item} key={`${index}_card`} />)
    };
    const styleContainer = {
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr 1fr',
        width: '100%',
        alignItems: 'center',
        marginLeft: '6px',

    }
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
            <PortfolioTabs onClick = {handleTabClick}/>
            <div style={styleContainer}>{renderCards(portfolioData)}</div>
        </Element>
    )
}