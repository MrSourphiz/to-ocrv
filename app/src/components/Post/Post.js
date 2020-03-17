import React from 'react';
import PropTypes from 'prop-types';
import './post.css';

function Post({link, title, owner}) {
    return (
        <a href={link} className = "post">
            <h2 className = "post__username">{owner}</h2>
            <p className = "post__title">{title}</p>
        </a>
    )
}

export default Post;
Post.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    owner: PropTypes.string,
  };
  
Post.defaultProps = {
    link: '',
    title: '',
    owner: '',
};
  