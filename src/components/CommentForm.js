import React, {Component, PropTypes} from "react"

class CommentForm extends Component {
	constructor() {
		super()
	}

	static propTypes = {
		 textVal : PropTypes.string.isRequired
		,userName : PropTypes.string.isRequired
	}

	static defaultProps = {
			textVal : ""
		 ,userName : ""
	}

	state = {
		  textVal : ""
		 ,titleVal : ""
	}

	componentWillReceiveProps() {
			//console.log('---', 'CL receiving props')
	}

	componentWillUpdate() {
			//console.log('---', 'CL will update')
	}
	// Не правильно понял дз, доделал немного! Знаю что уже поздно, но все же
	handleChange = stateValue => event => {
		this.setState({
				[stateValue] : event.target.value
		})
	}

	getUserName () {
		const {userName} = this.props
		let user = null
		if (userName === "") {
			user = (<p><span>User &nbsp;</span><strong>Anon</strong></p>)
		} else {
			user = (<p><strong>{userName}</strong></p>)
		}
		return user
	}
	render () {

		return (
			<form method="get" action="#" name="CommentForm">
					{this.getUserName()}
					<label htmlFor="inputUserName_1">Имя &nbsp;</label>
					<input type="text" id="inputUserName_1" name="title"
								value={this.state.titleVal}
								onChange={this.handleChange('titleVal')}
							/>
					<br />
					<label htmlFor="inputTextArea_1">Add your comment  &nbsp;</label>
					<input type="textarea" rows="5" cols="10" name="comment"
								 id="inputTextArea_1"
								 value={this.state.textVal}
								onChange={this.handleChange('textVal')}
							/>
			</form>
		)
	}
}

export default CommentForm
