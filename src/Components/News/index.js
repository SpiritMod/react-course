import React from 'react';
import './style.scss';
import { Article } from "../Article";
import { Button } from "../../Assets/Button";
import { List } from "../../Assets/List";
import { useParams, useHistory, useLocation } from 'react-router-dom';
//import { history } from "../../navigation/history";
import { book } from "../../navigation/book";

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

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
};

export const News = () => {
  let { id } = useParams();
  let history = useHistory();
  let location = useLocation();

  const query = useQuery();
  console.log(query.get('name'));

  if ( Number(id) === 666) {
    history.push(book.root);
  }

  console.log(location);

  const articles = db.map(item => {
    return <Article key={item.id} item={item}/>
  });

  return (
    <div className="c-news">
      <div className="o-container">
        <h2>News</h2>
        <h3>{id}</h3>
        <div className="c-news__list">
          { articles }
        </div>
        <ul>
          <List>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </List>
        </ul>

        <Button disabled type='link'>Send</Button>
        <Button type='button'>Text</Button>
      </div>
    </div>
  )
};

