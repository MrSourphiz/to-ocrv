import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './mainPage.css';

import {ReactComponent as GitHub} from '../../images/gh_logo.svg';
import {ReactComponent as StackOverflow} from '../../images/sf_logo.svg';

const SECTIONS = [
    {id: 1, title: 'GitHub', href: '/gh', Icon: GitHub},
    {id: 2, title: 'Stack Overflow', href: '/sf', Icon: StackOverflow}
];

class MainPage extends Component {
    render() {
        return (
            <div className = 'main-page'>
                <h1>Подборка постов за неделю с GitHub/Stack Overflow</h1>
                <ul className = 'main-page__list'>
                    {SECTIONS.map(section => {
                        const {
                            id, title, href, Icon
                        } = section;
                        return (
                            <li className = 'main-page__item' key={id}>
                                <Link className='main-page__link' to={href}>
                                    <Icon className='main-page__logo' width='200' height='200'/>
                                    <h2 className='main-page__title'>{title}</h2>
                                </Link>
                            </li>  
                        ) 
                    })}
                </ul>
            </div>
        )
    };
};

export default MainPage;