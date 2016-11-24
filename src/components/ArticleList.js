import React, { Component, PropTypes }  from 'react'
import Article from './Article'
import Accordion from '../decorators/accordion'

class ArticleList extends Component {
    static propTypes = {
       articles : PropTypes.array
      ,openArticleId : PropTypes.string
      ,openArticle  : PropTypes.func
    }

    render() {
        const { articles, openItemId, openItem } = this.props
        const articleItems = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id == openItemId}
                    toggleOpen = {openItem(article.id)}
                />
            </li>
        ))

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }

}

export default Accordion(ArticleList)
