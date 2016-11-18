import React, { Component } from 'react'
import ArticleComment from './ArticleComment'

class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            obj: { foo: 'bar' }
        }
    }
    render() {
        const { article } = this.props
        const body = this.state.isOpen ? <p>{article.text}</p> : null
        return (
            <section>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
                {(this.state.isOpen && article.comments !== undefined)
                    ? <ArticleComment comments={article.comments}/>
                    : null
                }
            </section>
        )
    }
    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article
