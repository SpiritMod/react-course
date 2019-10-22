import React from 'react';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { News } from '../Components/News';
import { Profile } from '../Components/Profile';
import { ExampleUseReducer } from '../Components/ExampleUseReducer';

export const Home = () => {
  return (
    <>
      <Header/>
      <main className="c-main" role="main">
        <div className="o-container">
          <ExampleUseReducer/>
          {/*<News/>

          <Profile/>*/}
        </div>
      </main>
      <Footer/>
    </>
  )
};

