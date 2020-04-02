import React, {Component} from 'react';
import { Link } from 'react-router-dom';

/*import PropTypes from 'prop-types';*/
import './popup.css';

class Popup extends Component {
    state = {
        path: this.props.path,
        visible: this.props.visible
    };

    handleClick = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        console.log(this.props)
        const { path } = this.state;
        return (
            this.state.visible && 
            <div className = 'popup'>
                <h2 className = 'popup__text'>Подтвердите переход</h2>
                <Link className = 'button__open' 
                        to={{pathname: `${path}/detail`,  
                            state:{owner: this.props.owner, 
                            title: this.props.title, 
                            link: this.props.link, 
                            property1: this.props.property1, 
                            property2: this.props.property2} }}>Перейти</Link>
                <button className = 'popup__close' aria-label='Закрыть' onClick = {this.handleClick}></button>
            </div>
        )
    }
}

export default Popup;
/*Popup.propTypes = {
    owner: PropTypes.string,
    title: PropTypes.string,
    link: PropTypes.string,
    property1: PropTypes.string,
    path: PropTypes.string,
    visible: PropTypes.bool
  };
  
Popup.defaultProps = {
    owner: '',
    title: '',
    link: '',
    property1: '',
    path: '',
    visible: ''
};*/