import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import '../css/main.css'

// const liStyle = {
//   "border" : "1px solid red",
//   "display" : "inline-block",
//   "margin" : "5px",
//   "padding" : "5px"
// }

class CommentsPaginator extends Component {
    static propTypes = {
      // from connect
      comments: PropTypes.array.isRequired
    }

    state = {
        pagCommentLimit: 5
    }

    getLinkItems() {
      const { comments } = this.props
      let  linkItems = []
          ,offset = 0
          ;
      for (let i=0; i < Math.ceil(comments.length/this.state.pagCommentLimit); i++ ) {
        linkItems.push(
          <li key={Date.now()+Math.random()}>
            <Link activeClassName="active" to = {`/comments/page=${i+1}/${offset}-${offset+=this.state.pagCommentLimit}`}>{`${i+1}`}</Link>
          </li>
        )
      }

      return linkItems
    }

    render() {
        const { comments } = this.props
        const liItems = this.getLinkItems()
        return (
            <div>
                <h2> Страницы </h2>
                <ul className="pagination-list" style={{"listStyleType":"none"}}>
                  {liItems}
                </ul>
            </div>
        )
    }
}

export default connect( ( (state, props) =>({
       comments: state.comments.entities.valueSeq().toArray() || []
    })
  )
)(CommentsPaginator)
