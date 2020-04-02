import React, { Component } from 'react';
/*import PropTypes from 'prop-types';*/
import './post.css';
import Popup from '../../Popups/Popup';

class Post extends Component {
    state = {
        path: this.props.path,
        link: this.props.link,
        title: this.props.title,
        property1: this.props.property1,
        property2: this.props.property2,
        owner: this.props.owner,
        visible: false
    };

    handleClick = (evt) => {
        evt.preventDefault();
        this.setState({
            visible: !this.state.visible
        })
    }

    render () {
        const { path } = this.state;
        const { link } = this.state;
        const { title } = this.state;
        const { property1 } = this.state;
        const { property2 } = this.state;
        const { owner } = this.state;
        const { visible } = this.state;
        return (
            <div onClick = {this.handleClick}  className = "post">
                <h2 className = "post__username">{owner}</h2>
                <p className = "post__title">{title}</p>
                {this.state.visible && 
                    <Popup 
                        visible = { visible } 
                        owner={owner} 
                        title={title} 
                        link={link} 
                        property1={property1} 
                        property2={property2} 
                        path={path}/>}
            </div>
        )
            
    }
}

export default Post;
/*Post.propTypes = {
    path: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string,
    property1: PropTypes.string,
    owner: PropTypes.string
  };
  
Post.defaultProps = {
    path: '',
    link: '',
    title: '',
    property1: '',
    owner: ''
};*/  