import React, { Component, PropTypes } from 'react'
import CommentList from '../components/CommentList'

class CommentsPage extends Component {
    static propTypes = {

    };

    render() {
        return (
					<h1>{this.props.params.limit},,,{this.props.params.offset} </h1>
            // <Article articleId={this.props.params.id} isOpen = {true} key = {this.props.params.id}/>
        )
    }
}

export default CommentsPage
