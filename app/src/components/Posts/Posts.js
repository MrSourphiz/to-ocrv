import React, { Component } from 'react';
import Postlist from '../PostList/PostList'; 
import Loader from '../Loader/Loader'

class Posts extends Component {
    state = {
        posts: [],
        url: '',
        loading: true
    };

    componentDidMount() {
        if (this.props.location.pathname === '/sf') {
            fetch('https://api.stackexchange.com/2.2/search?intitle=react&site=stackoverflow')
            .then(response => response.json())
            .then(data => this.setState({ posts: data.items, loading: false }))
        } else if (this.props.location.pathname === '/gh') {
            fetch('https://github-trending-api.now.sh/repositories?language=&since=daily')
            .then(response => response.json())
            .then(data => this.setState({ posts: data, loading: false }))
        }
    }
    
    render () {
        const { posts } = this.state;
        return (
            <section>
                {this.state.loading 
                    ? <Loader />
                    : <Postlist items = { posts } path={this.props.location.pathname}/>
                }
            </section>
        )
    }
}

export default Posts;