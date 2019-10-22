import React from 'react';
import { useNews } from './useNews';

export const SmartNews = () => {
  const { posts } = useNews();

  const articles = posts.map( ({ title, objectId }) => {
    return (
      <li key={objectId}>{title}</li>
    )
  });

  return (
    <>
      <h2>smart news</h2>
      <ul>
        { articles }
      </ul>
    </>
  )
};