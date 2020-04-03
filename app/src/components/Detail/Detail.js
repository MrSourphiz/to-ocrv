import React, { Component } from 'react';
import { ReactComponent as Star } from '../../images/star.svg';
import BackButton from '../Popups/BackButton'

import './detail.css';

class Detail extends Component {
    state = {
        url: '',
        type: '',
        property1: '',
        property2: ''
    }

    renderLanguage = () => {
        if (this.props.location.state.property1 === '' || this.props.location.state.property1 === undefined) {
            this.setState({
                property1: 'Язык: Не указан'
            })
        } else {
            this.setState({
                property1: 'Язык: ' + this.props.location.state.property1
            })
        }
    }

    renderDescision = () => {
        if (this.props.location.state.property1 === 'true') {
            this.setState({
                property1: 'Решение: Есть'
            })
        } else {
            this.setState({
                property1: 'Решение: Нету'
            })
        }
    }

    renderTags = () => {
        this.setState({
            property2: 'Тэги: '
        })
    }
    
    renderStars = () => {
        if (typeof this.props.location.state.property2 === 'number') {
            this.setState({
                property2: <Star className='detail__star'/>
            })
        }
    }
    renderUrl = () => {
        if (this.props.location.pathname === '/sf/detail') {
            this.renderDescision()
            this.renderTags()
            this.setState({
                url: 'Stack Overflow',
                type: ' тему '
            })
        } else  {
            this.renderLanguage()
            this.renderStars()
            this.setState({
                url: 'GitHub',
                type: ' репозиторий '
            })
        }
    }

    componentDidMount() {
        this.renderUrl()
    }

    render () {
        console.log(this.props.location.state);
        return (
            <div className='detail'>
                <BackButton path={this.props.location.pathname}/>
                <div className="detail__header">
                    <h2 className='detail__owner'>Автор: {this.props.location.state.owner}</h2>
                    <div className='detail__properties'>
                        <p>{this.state.property1}</p>
                        <p>{this.state.property2}{this.props.location.state.property2}</p>
                    </div>
                    
                </div>
                <p className='detail__title'><strong>{this.props.location.state.description}</strong></p>
                <p className='detail__description'>Описание: {this.props.location.state.title}</p>
                
                <a className='button__open' href={this.props.location.state.link}>Открыть {this.state.type} на {this.state.url}</a>
            </div>
        )
    }
}

export default Detail;