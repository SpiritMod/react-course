import React from 'react';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { News } from '../Components/News';

export const Home = () => {
  return (
    <>
      <Header/>
      <main className="c-main" role="main">
        <div className="o-container">
          <News/>
        </div>
      </main>
      <Footer/>
    </>
  )
};

