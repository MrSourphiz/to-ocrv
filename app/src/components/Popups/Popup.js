import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './popup.css';

class Popup extends Component {
    state = {
        visible: this.props.visible
    };

    handleClick = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        return (
            this.state.visible && 
            <div className = 'popup'>
                <h2 className = 'popup__text'>Подтвердите переход</h2>
                <Link className = 'button__open' 
                        to={{pathname: `${this.props.path}/detail`,  
                            state:{
                                owner: this.props.owner, 
                                title: this.props.title,
                                description: this.props.description, 
                                link: this.props.link, 
                                property1: this.props.property1, 
                                property2: this.props.property2} 
                            }}>Перейти</Link>
                <button className = 'popup__close' aria-label='Закрыть' onClick = {this.handleClick}></button>
            </div>
        )
    }
}

export default Popup;