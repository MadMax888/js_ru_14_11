import React, { Component } from 'react'

class ArticleComment extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
        }
    }
    render() {
        const { comments } = this.props
        const linkText = this.state.isOpen ? `Закрыть` : `Открыть`
        const commentsItems = comments.map(
              (item) => <li key = {item.id}>
                          <h3 style={{"font-size":"14px"}}>{item.user}</h3>
                          {item.text}
                        </li>
            )
        const commentList = this.state.isOpen ? commentsItems : null
        return (
            <div>
              <a href="#" onClick={this.linkClick}>{linkText}</a>
              {commentList}
            </div>
        )
    }

    linkClick = (event) => {
        event.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default ArticleComment
