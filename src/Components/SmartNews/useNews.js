import { useState, useEffect } from 'react';

import { api } from './api';

export const useNews = () => {
  const [ posts, setPosts ] = useState([]);

  // как получить
  useEffect(() => {

    (async () => {
      const posts = await api.getPosts();
      setPosts(posts);
      console.log(posts);
    })();

  }, []);



  return { posts };

};