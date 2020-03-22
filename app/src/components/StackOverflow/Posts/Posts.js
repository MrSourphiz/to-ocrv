import React, { Component } from 'react';
import Postlist from '../PostList/PostList'; 

class Posts extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        fetch('https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow')
        .then(response => response.json())
        .then(data => this.setState({ posts: data.items }))
    }
    
    render () {
        const { posts } = this.state;
        return (
            <section>
                <Postlist items = {posts}/>
            </section>
        )
    }
}

export default Posts;