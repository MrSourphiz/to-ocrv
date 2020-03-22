import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './post.css';
import Popup from '../../Popups/Popup';

class Post extends Component {
    state = {
        link: this.props.link,
        title: this.props.title,
        owner: this.props.owner,
        is_answered: this.props.title,
        tags: this.props.owner,
        visible: false
    };

    handleClick = (evt) => {
        evt.preventDefault();
        this.setState({
            visible: !this.state.visible
        })
    }

    render () {
        const { link } = this.state;
        const { title } = this.state;
        const { owner } = this.state;
        const { visible } = this.state;
        const { is_answered } = this.state;
        const { tags } = this.state;
        return (
            <a onClick = {this.handleClick} href={link} className = "post">
                <h2 className = "post__username">{owner}</h2>
                <p className = "post__title">{title}</p>
                {this.state.visible && <Popup visible = { visible } link = {link} is_answered = {is_answered} tags={tags} owner={owner} title={title}/>}
            </a>
        )
            
    }
}

export default Post;
Post.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    owner: PropTypes.string,
    is_answered: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.tags)
  };
  
Post.defaultProps = {
    link: '',
    title: '',
    owner: '',
    is_answered: '',
    tags: ''
};
  