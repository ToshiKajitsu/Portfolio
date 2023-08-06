import React from 'react';
import './homePage.css';
import { Information } from '../../widgets/information/information';
import { Header } from '../../widgets/header/header';
import { WorkHistory } from '../../widgets/workHistory/workHistory';
import { Portfolio } from '../../widgets/portfolio/portfolio';
import { ContactInformation } from '../../widgets/ci/cI';
import { Footer } from '../../widgets/footer/footer';
import { RightPanel } from '../../widgets/rightPanel/rightPanel';

export const HomePage = () => {
  return (
    <div className="container">
      <Information />
      <div className="inner">
        <Header />
        <WorkHistory name='education' />
        <WorkHistory name='work' />
        <Portfolio />
        <ContactInformation />
        <Footer />
      </div>
      <RightPanel />
    </div>
  );
}

