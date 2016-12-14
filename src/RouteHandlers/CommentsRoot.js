import React, { Component, PropTypes } from 'react'
import CommentsPaginator from '../components/CommentsPaginator'

class CommentsRoot extends Component {
	static propTypes = {}

	render () {
		return (
			<div>
				<CommentsPaginator />
				{this.props.children}
			</div>
		)
	}
}

export default CommentsRoot
