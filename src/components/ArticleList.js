import React, { Component, PropTypes }  from 'react'
import Article from './Article'
import AccordionArticles from '../decorators/accordionArticles'

class ArticleList extends Component {
    static propTypes = {
       articles : PropTypes.array
      ,openArticleId : PropTypes.string
      ,openArticle  : PropTypes.func
    }

    render() {
        const { articles, openArticleId, openArticle } = this.props
        const articleItems = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id == openArticleId}
                    toggleOpen = {openArticle(article.id)}
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

export default AccordionArticles(ArticleList)
