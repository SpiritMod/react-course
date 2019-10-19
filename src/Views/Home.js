import React from 'react';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { News } from '../Components/News';

const db = [
  {
    id: 'a1',
    title: 'The standard Lorem Ipsum passage, used since the 1500s',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    published: '15.07.2017',
    likes: 315,
    comments: 10,
    image: 'https://source.unsplash.com/random/480x400/?literature,books',
    tags: [
      'literature',
      'books'
    ]
  },
  {
    id: 'a2',
    title: 'Title 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    published: '15.07.2017',
    likes: 315,
    comments: 10,
    image: 'https://source.unsplash.com/random/480x400/?literature',
    tags: [
      'literature',
      'books'
    ]
  },
  {
    id: 'a3',
    title: 'Title 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    published: '15.07.2017',
    likes: 315,
    comments: 10,
    image: 'https://source.unsplash.com/random/480x400/?books',
    tags: [
      'literature',
      'books'
    ]
  },
];

export const Home = () => {
  return (
    <>
      <Header/>
      <main className="c-main" role="main">
        <div className="o-container">
          <News source={db}/>
        </div>
      </main>
      <Footer/>
    </>
  )
};

