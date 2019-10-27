import React from 'react';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { News } from '../Components/News';
import { Profile } from '../Components/Profile';
import { ExampleUseReducer } from '../Components/ExampleUseReducer';
import { ExSetTimeout } from '../Components/ExSetTimeout';
import { ExSetInterval } from '../Components/ExSetInterval';
import { ExUseMemo } from '../Components/ExUseMemo';
import { ExLocalStore } from '../Components/ExLocalStore';
import { SmartNews } from '../Components/SmartNews';

export const Unknown = () => {
  return (
    <>
      <main className="c-main" role="main">
        <div className="o-container">
          <h1>404</h1>
          <p>Ups:)</p>
        </div>
      </main>
      <Footer/>
    </>
  )
};

