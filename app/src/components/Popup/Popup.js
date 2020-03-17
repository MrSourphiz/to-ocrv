import React, {Component} from 'react';
import './popup.css';

class Popup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        }
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            this.state.isOpen && 
            <div className = "popup">
                <p className = "popup__text">Текст попапа</p>
                <button className = "popup__open">Перейти по ссылке</button>
                <button className = "popup__close" onClick = {this.handleClick}>Закрыть</button>
            </div>
        )
    }
}

export default Popup;