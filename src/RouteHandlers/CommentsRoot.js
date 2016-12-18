import React, { Component, PropTypes } from 'react'
import CommentsPaginator from '../components/CommentsPaginator'

class CommentRoot extends Component {
    static propTypes = {

    };
    
    static contextTypes = {
        localization: PropTypes.object
    }

    render() {
      const { commentsTitle } = this.context.localization.dictionary[this.context.localization.checkedLng]
        return (
            <div>
                <h1>{commentsTitle}</h1>
                {this.props.children}
                <CommentsPaginator />
            </div>
        )
    }
}

export default CommentRoot
