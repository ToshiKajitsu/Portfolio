import React from 'react';
import './homePage.css';
import { Information } from '../../widgets/information/information';
import { Header } from '../../widgets/header/header';
import { WorkHistory } from '../../widgets/workHistory/workHistory';
import { Portfolio } from '../../widgets/portfolio/portfolio';
import { ContactInformation } from '../../widgets/ci/cI';
import { Footer } from '../../widgets/footer/footer';
import { RightPanel } from '../../widgets/rightPanel/rightPanel';
import { WORK, EDUCATION } from '../../constants/workHistory';
import { useTheme } from '../../processes/contextTheme';
import { PORTFOLIO_INFO } from '../../constants/portfolioInfo';
import { CONTACT_INFORMATION } from '../../constants/contactInformation';


export const HomePage = () => {
  const {theme} = useTheme();

  return (
    <div className={`container container_${theme}`}>
      <Information />
      <div className="inner">
        <Header />
        <WorkHistory name='education' data={EDUCATION} />
        <WorkHistory name='work' data={WORK} />
        <Portfolio data = {PORTFOLIO_INFO} />
        <ContactInformation data = {CONTACT_INFORMATION}/>
        <Footer />
      </div>
      <RightPanel />
    </div>
  );
}

