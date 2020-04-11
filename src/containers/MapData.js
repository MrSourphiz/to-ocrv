import React from 'react';
import Post from '../components/Post/Post';

export function MapData(array, path) {
  const listItems = array.map((item, index) =>
      <Post key={index} data={item} path={path} index={index}/>
  );
  return (
    <ul className = "postlist">
      {listItems}
    </ul>
  )
};