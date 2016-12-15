import React, { Component, PropTypes } from 'react'
import CommentsPaginationPage from '../components/CommentsPaginationPage'

class CommentsPage extends Component {
    static propTypes = {

    };

    render() {
        return (
          <div>
            <CommentsPaginationPage page={this.props.params.page} range={this.props.params.range} />
          </div>
        )
    }
}

export default CommentsPage
