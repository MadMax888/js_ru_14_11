import React, { Component, PropTypes } from 'react'

class NewCommentForm extends Component {
    state = {
        text: '',
        user: ''
    }

    static contextTypes = {
        localization: PropTypes.object
    }

    handleChange = field => ev => {
        if (ev.target.value.length > 5) return
        this.setState({
            [field]: ev.target.value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.props.addComment(this.state, this.props.articleId)
        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        const { formLabelUser, formLabelComment ,formLabelBtn} = this.context.localization.dictionary[this.context.localization.checkedLng]
        return (
            <form onSubmit = {this.handleSubmit}>
                {formLabelComment}: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                {formLabelUser}: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
              <input type = "submit" value={formLabelBtn}/>
            </form>
        )
    }
}

export default NewCommentForm
