import React from 'react';
import PropTypes from 'prop-types';
import './postlist.css';
import Post from '../Post/Post'; 

function PostList ({items}) {
    return (
        <div className = "container">
            <ul className = "postlist">
                {items.map(post => {
                    const {
                        link, title, question_id, owner,
                    } = post;
                    const { display_name } = owner;
                    return (
                        <li className = "postlist__item" key = {question_id}>
                            <Post 
                                link={link} 
                                title = {title}
                                owner = {display_name}
                            />
                        </li>
                    ) 
                })}
            </ul>
        </div>
    )
}

export default PostList;

PostList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.any),
  };
  
PostList.defaultProps = {
    items: [],
};