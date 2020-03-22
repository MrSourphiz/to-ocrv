import React, { Component } from 'react';
import { ReactComponent as BackLogo } from '../../images/back_logo.svg';
import './backbutton.css';

class BackButton extends Component {
    render () {
        return (
            <a href='/home' className='back-button'>
                <BackLogo className='back-button__logo' />
            </a>
        )
    }
}

export default BackButton;