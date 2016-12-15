import React, { Component, PropTypes } from 'react'
import { loadTotalComments } from "../AC/comments"
import { Link } from 'react-router'
import { connect } from 'react-redux'
import '../css/main.css'
import {Record, Map} from 'immutable'

class CommentsPaginator extends Component {
    static propTypes = {
      // from connect
      totalLoaded: PropTypes.bool.isRequired
     ,paginationPages: PropTypes.array.isRequired
    }

    state = {
        pagCommentLimit: 5
    }

    componentDidMount() {
      console.log("Mounted COMMENTPAG -----")
      const { loadTotalComments, totalLoaded } = this.props
      if ( !totalLoaded ) loadTotalComments(this.state.pagCommentLimit)
    }

    componentWillReceiveProps() {
      // const { loadTotalComments } = this.props
      // loadTotalComments()
    }

    getLinkItems() {
      const { paginationPages } = this.props
      let offset = 0
      if ( paginationPages.length <= 0) return null
      const linkItems = paginationPages.map((item,i) => <li key={item.id}>
        <Link activeClassName="active" to = {`/comments/page=${i+1}/${offset}-${offset+=this.state.pagCommentLimit}`}>{`${i+1}`}</Link>
      </li>)


      return linkItems
    }

    render() {
        const liItems = this.getLinkItems()
        return (
            <div>
                <h2> Страницы </h2>
                <ul className="pagination-list">
                  {liItems}
                </ul>
            </div>
        )
    }
}

export default connect( state => ({
       paginationPages: state.comments.paginationPages || [],
       totalLoaded: state.comments.totalLoaded
    }),{ loadTotalComments })(CommentsPaginator)
