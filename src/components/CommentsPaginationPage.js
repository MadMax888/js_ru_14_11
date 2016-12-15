import React, { Component, PropTypes } from 'react'
import { loadPaginationComments } from "../AC/comments"
import { connect } from 'react-redux'
import '../css/main.css'

class CommentsPaginationPage extends Component {
    static propTypes = {
      // from connect
    }


    componentDidMount() {
      const {loadPaginationComments, paginationPages} = this.props
      const indexPage = this.props.page.split('=')[1] - 1
      const limit = this.props.range.split('-')[1]-this.props.range.split('-')[0]
      const offset = this.props.range.split('-')[1]
      console.log("indexPage -- ", indexPage)
      console.log("limit -- ", limit)
      console.log("offset -- ", offset)
      console.log("paginationPages -- ", paginationPages)
      if (!paginationPages[indexPage].loaded) loadPaginationComments(indexPage,limit,offset)

    }

    componentWillReceiveProps(nextProps) {
      const {loadPaginationComments, paginationPages} = nextProps
      const indexPage = nextProps.page.split('=')[1] - 1
      const limit = nextProps.range.split('-')[1]-nextProps.range.split('-')[0]
      const offset = nextProps.range.split('-')[1]
      console.log("indexPage -- ", indexPage)
      console.log("limit -- ", limit)
      console.log("offset -- ", offset)
      console.log("paginationPages -- ", paginationPages)
      if (!paginationPages[indexPage].loaded) loadPaginationComments(indexPage,limit,offset)
    }


    render() {

        return (
            <div>
							<h1>{this.props.page},,,{this.props.range} </h1>
            </div>
        )
    }
}

export default connect( (state,props) => ({
  paginationPages: state.comments.paginationPages
}),{ loadPaginationComments })(CommentsPaginationPage)
