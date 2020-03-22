import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BackButton from '../Popups/BackButton'

import './detail.css';

class Detail extends Component {
    state = {
        link: this.props.link,
        title: this.props.title,
        owner: this.props.owner,
        is_answered: this.props.title,
        tags: this.props.owner
    };
    render () {
        const { link } = this.state;
        const { title } = this.state;
        const { owner } = this.state;
        const { is_answered } = this.state;
        const { tags } = this.state;
        return (
            <div className='detail'>
                <BackButton />
                <h2 className='detail__title'>{owner}</h2>
                <p className='detail__text'>{title}</p>
                <span className='detail__tags'>{tags}</span>
                <span className='detail__answered'>{is_answered}</span>
                <a className='detail__link' href={link}>ссылка на SF</a>
            </div>
        )
    }
}

export default Detail;

Detail.propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
    owner: PropTypes.string,
    is_answered: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.tags)
  };
  
Detail.defaultProps = {
    link: '',
    title: '',
    owner: '',
    is_answered: '',
    tags: ''
};