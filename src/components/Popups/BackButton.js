import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './backButton.css';

import {ReactComponent as BackLogo} from '../../images/back_logo.svg';

class BackButton extends Component {
    state = {
        path: this.props.path,
        href: ''
    };

    componentDidMount() {
        switch (true) {
            case (this.state.path === '/sf/detail'):
                this.setState({
                    href: '/sf'
                })
                break
            case (this.state.path === '/gh/detail'):
                this.setState({
                    href: '/gh'
                })
                break
            default:
                this.setState({
                    href: '/home'
                })
                break 
        }
    };

    render () {
        return (
            <Link to={this.state.href} className='back-button'>
                <BackLogo className='back-button__logo' width='45' height='45' />
            </Link>
        )
    };
};

export default BackButton;