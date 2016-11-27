import React, {Component, PropTypes} from "react"

class CommentForm extends Component {
	constructor() {
		super()
	}

	static propTypes = {
		 textVal : PropTypes.string.isRequired
	}

	static defaultProps = {
		 textVal : ""
	}

	state = {
		 textVal : ""
	}

	componentWillReceiveProps() {
			//console.log('---', 'CL receiving props')
	}

	componentWillUpdate() {
			//console.log('---', 'CL will update')
	}

	setValueText = text => {
			this.setState({
					textVal: text
			})
	}

	handleChange = event => {
		this.setValueText(event.target.value)
	}

	render () {
		return (
			<form method="get" action="#" name="CommentForm">
				<label htmlFor="inputTextArea_1">Add your comment  </label>
					<input type="textarea" rows="5"
								 id="inputTextArea_1"
								 value={this.state.textVal}
								onChange={this.handleChange}
							/>
			</form>
		)
	}
}

export default CommentForm
