import React from 'react';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { Accordion } from '../Components/Accordion';

import { data } from '../data/AccordionData.js';

export const Home = () => {
  return (
    <>
      <Header/>
      <main className="c-main" role="main">
        <div className="o-container">
          <Accordion source={data} />
        </div>
      </main>
      <Footer/>
    </>
  )
};

