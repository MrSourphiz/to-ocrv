import React, { Component } from 'react';
import './post.css';
import Popup from '../Popups/Popup';

class Post extends Component {
    state = {
        visible: false
    };

    handleClick = (evt) => {
        evt.preventDefault();
        this.setState({
            visible: !this.state.visible
        })
    }

    render () {
        return (
            <div onClick = {this.handleClick}  className = "post">
                <h2 className = "post__username">Автор: {this.props.owner}</h2>
                <p className = "post__title">{this.props.title}</p>
                {this.state.visible && 
                    <Popup 
                        visible = {this.state.visible} 
                        owner={this.props.owner} 
                        title={this.props.title}
                        description={this.props.description}  
                        link={this.props.link} 
                        property1={this.props.property1} 
                        property2={this.props.property2} 
                        path={this.props.path}/>}
            </div>
        )
            
    }
}

export default Post;