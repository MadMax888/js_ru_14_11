import React, { Component } from 'react'
//неудачное название, ведь это список, сделай множественное число
class ArticleComment extends Component {

    constructor() {
        super()
        this.state = {
            //аналогично проблема с названием - ведь это состояние не только на линк влияет
            isOpenLink: false,
        }
    }
    render() {
        const { comments } = this.props
        const linkText = this.state.isOpenLink ? `Закрыть` : `Открыть`
        const commentsItems = comments.map(
              (item) => <li key = {item.id}>
                          <h3 style={{"font-size":"14px"}}>{item.user}</h3>
                          <p style={{"padding":"0 15px"}}>{item.text}</p>
                        </li>
            )
        const commentList = this.state.isOpenLink ? commentsItems : null
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
            isOpenLink: !this.state.isOpenLink
        })
    }
}

export default ArticleComment
