import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './mainpage.css';

import { ReactComponent as GitHub } from '../../images/gh_logo.svg';
import { ReactComponent as StackOverflow } from '../../images/sf_logo.svg';

const SECTIONS = [
    { title: 'GitHub', href: '/gh', Icon: GitHub },
    { title: 'Stack Overflow', href: '/sf', Icon: StackOverflow}
]

class MainPage extends Component {
    render() {
        return (
            <div className = "container">
                <ul className = "main-page">
                    {SECTIONS.map(section => {
                        const {
                            title, href, Icon
                        } = section;
                        return (
                            <li className = 'main-page__item'>
                                <Link className='main-page__link' to={href}>
                                    <Icon className='main-page__logo' />
                                    <h2 className='main-page__title'>{title}</h2>
                                </Link>
                            </li>
                        ) 
                    })}
                </ul>
            </div>
        )
    }
}

export default MainPage;