import React, { Component } from 'react';
import { ReactComponent as Star } from '../../images/star.svg';
import BackButton from '../Popups/BackButton'

import './detail.css';

class Detail extends Component {
    state = {
        url: '',
        property1: '',
        property2: ''
    }

    renderUrl = () => {
        if (this.props.location.pathname === '/sf/detail') {
            this.setState({
                url: 'Stack Overflow'
            })
        } else  {
            this.setState({
                url: 'GitHub'
            })
        }
    }

    renderLanguageOrDescision = () => {
        switch (true) {
            case (this.props.location.state.property1 === '' || this.props.location.state.property1 === undefined):
                this.setState({
                    property1: 'Язык: Не указан'
                })
                break
            case (this.props.location.state.property1 === 'true'):
                this.setState({
                    property1: 'Решение: Есть'
                })
                break
            case (this.props.location.state.property1 === 'false'):
                this.setState({
                    property1: 'Решение: Нету'
                })
                break
            default :
                this.setState({
                    property1: 'Язык: ' + this.props.location.state.property1
                })
                break
        }
    }

    renderTagsOrStars = () => {
        if (typeof this.props.location.state.property2 === 'number') {
            this.setState({
                property2: <Star className='detail__star'/>
            })
        } else {
            this.setState({
                property2: 'Тэги: '
            })
        }
    }

    componentDidMount() {
        this.renderUrl()
        this.renderLanguageOrDescision()
        this.renderTagsOrStars()
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
                
                <p className='detail__title'>Описание: {this.props.location.state.title}</p>
                
                <a className='button__open' href={this.props.location.state.link}>Открыть тему на {this.state.url}</a>
            </div>
        )
    }
}

export default Detail;