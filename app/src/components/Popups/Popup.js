import React, {Component} from 'react';
import { Link } from "react-router-dom"
import { ReactComponent as GoLogo } from '../../images/go_logo.svg';

import PropTypes from 'prop-types';
import './popup.css';

class Popup extends Component {
    state = {
        visible: this.props.visible,
        link: this.props.link,
        title: this.props.title,
        owner: this.props.owner,
        is_answered: this.props.title,
        tags: this.props.owner
    };

    handleClick = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        const { link } = this.state;
        const { title } = this.state;
        const { owner } = this.state;
        const { is_answered } = this.state;
        const { tags } = this.state;
        return (
            this.state.visible && 
            <div className = 'popup'>
                <h2 className = 'popup__text'>Подтвердите переход</h2>
                <Link to='/detail' className = 'popup__open' link = {link} is_answered = {is_answered} tags={tags} owner={owner} title={title}>
                    <GoLogo className='back-button__logo' />
                </Link>
                <button className = 'popup__close' onClick = {this.handleClick}>Закрыть</button>
            </div>
        )
    }
}

export default Popup;
Popup.propTypes = {
    visible: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    owner: PropTypes.string,
    is_answered: PropTypes.string,
    tags: PropTypes.string
  };
  
Popup.defaultProps = {
    visible: '',
    link: '',
    title: '',
    owner: '',
    is_answered: '',
    tags: ''
};