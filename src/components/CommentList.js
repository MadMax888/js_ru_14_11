import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addComment, loadAllComments, loadArticleComments } from '../AC/comments'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import Loader from './Loader'
import { Record, Map } from 'immutable'

class CommentList extends Component {
    static propTypes = {
        // commentIds: PropTypes.array.isRequired,
        //from connect
        comments: PropTypes.array.isRequired,
        loadAllComments: PropTypes.func.isRequired,
        loadArticleComments: PropTypes.func.isRequired,
        addComment: PropTypes.func.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: []
    }

    componentDidMount () {}

    componentWillReceiveProps(nextProps) {
        //console.log('---', 'CL receiving props'
      const { loadAllComments, loadArticleComments, isOpen , comments, article} = this.props

      if (nextProps.isOpen && !isOpen && !article.commentsLoading) {

        loadArticleComments(article.id)
        loadAllComments(article.id)
      }

    }

    componentWillUpdate() {
        //console.log('---', 'CL will update')
    }


    render() {
        return (
            <div>
                {this.getButton()}
                {this.getBody()}
            </div>
        )
    }


    getButton() {
        const { comments, isOpen, toggleOpen } = this.props
        // if ( !comments.length) return <span>No comments yet</span>
        return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }

    getBody() {
        const { article, comments, isOpen, addComment, loading } = this.props
        if ( loading ) return <Loader />
        console.log("art -- ", article)
        console.log("com -- ", comments)
        const commentForm = <NewCommentForm articleId = {article.id} addComment = {addComment} />
        if (!isOpen || !comments.length) return <div>{commentForm}</div>
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <div><ul>{commentItems}</ul>{commentForm}</div>
    }
}

export default connect((state, props) => ({
    //  comments: (props.article.comments || []).map(id => state.comments.entities.get(id))
     comments: (state.comments.entities.toArray().length)
      ? (props.article.comments || []).map(id => state.comments.entities.get(id))
      : []
    ,loading: state.comments.loading
}), { addComment, loadAllComments, loadArticleComments })(toggleOpen(CommentList))
