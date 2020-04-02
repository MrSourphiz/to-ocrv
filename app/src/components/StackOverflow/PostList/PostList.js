import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './postlist.css';

import Post from '../Post/Post'; 
import BackButton from '../../Popups/BackButton'

class PostList extends Component {
    render () {
        console.log(this.props)
        return (
            <div className = "container">
                <BackButton path={this.props.path} />
                <ul className = "postlist">
                    {this.props.items.map((post, index) => {
                        if (this.props.path === '/sf') {
                            const {
                                link, title, owner, is_answered, tags
                            } = post;
                            const { display_name } = owner;
                            return (
                                <li className = "postlist__item" key={index}>
                                    <Post 
                                        path={this.props.path}
                                        link={link} 
                                        title={title}
                                        owner={display_name}
                                        property1={is_answered.toString()}
                                        property2={tags.join(', ')}
                                    />
                                </li>
                            ) 
                        } else {
                            const {
                                url, description, author, language, stars
                            } = post;
                            return (
                                <li className = "postlist__item" key={index}>
                                    <Post 
                                        path={this.props.path}
                                        link={url} 
                                        title={description}
                                        owner={author}
                                        property1={language}
                                        property2={stars}
                                    />
                                </li>
                            ) 
                        }
                        
                    })}
                </ul>
            </div>
        )
    }
}

export default PostList;

PostList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.any),
    path: PropTypes.string
  };
  
PostList.defaultProps = {
    items: [],
    path: ''
};