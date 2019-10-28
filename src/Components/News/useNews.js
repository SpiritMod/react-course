import { useState, useEffect } from 'react';

import { api } from './api';

export const useNews = () => {
  const [ posts, setPosts ] = useState([]);

  const localStorageKey = 'localStoragePosts';
  const storageData = JSON.parse(localStorage.getItem(localStorageKey));

  const lifeTimeData = 10 * 60000;


  const getPosts = () => {
    (async () => {
      const posts = await api.getPosts();
      setPosts(posts);
      saveInLocalStorage(posts);
    })();
  };

  const saveInLocalStorage = (data) => {
    localStorage.setItem(localStorageKey, JSON.stringify({
      date: new Date(),
      source: data
    }));
  };

  const compareData = () => {
    const storageDate = new Date(storageData.date).getTime() + lifeTimeData;
    const currentDate = new Date().getTime();

    if (storageDate < currentDate) {
      getPosts();
    } else {
      setPosts(storageData.source);
    }
  };


  useEffect(() => {
    if (storageData) {
      compareData();
    } else {
      getPosts();
    }
  }, []);

  return posts;

};