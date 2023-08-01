import React from 'react';
import './homePage.css';
import { Information } from '../../widgets/information/information';
import { Header } from '../../widgets/header/header'

export const HomePage = () => {
  return (
    <div className="container">
      <Information />
      <div className="inner">
        <Header />
      </div>
    </div>
  );
}

