import React from 'react';
import PropTypes from 'prop-types';
import './postlist.css';

import Post from '../Post/Post'; 
import BackButton from '../../Popups/BackButton'

function PostList ({items}) {
    return (
        <div className = "container">
            <BackButton />
            <ul className = "postlist">
                {items.map(post => {
                    const {
                        link, title, question_id, owner, is_answered, tags
                    } = post;
                    const { display_name } = owner;
                    return (
                        <li className = "postlist__item" key = {question_id}>
                            <Post 
                                link={link} 
                                title = {title}
                                owner = {display_name}
                                tags = {tags}
                                is_answered = {is_answered}
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