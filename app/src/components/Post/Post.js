import React, { Component } from 'react';
import './post.css';
import Popup from '../Popups/Popup';

class Post extends Component {
    state = {
        visible: false,
        author: '',
        description: ''
    };

    handleClick = (evt) => {
        evt.preventDefault();
        this.setState({
            visible: !this.state.visible
        })
    }

    checkDescription = () => {
        if (this.props.data.title === '' || this.props.data.description === '') {
            this.setState({
                description: 'Отсутствует'
            })
        }
    }

    componentDidMount() {
        if (this.props.path === '/sf') {
            this.setState({
                author: this.props.data.owner.display_name,
                description: this.props.data.title
            })
        } else {
            this.setState({
                author: this.props.data.author,
                description: this.props.data.description
            })
        }
        this.checkDescription()
    }

    render () {
        const {path, index} = this.props
        console.log(this.props)
        return (
            <li onClick = {this.handleClick}  className = "post">
                <h2 className = "post__username">Автор: {this.state.author}</h2>
                <p className = "post__title">Описание: {this.state.description}</p>
                {this.state.visible && <Popup visible = {this.state.visible} path={path} index={index}/>}
            </li>
        )
            
    }
}

export default Post;