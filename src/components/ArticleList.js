import React, { Component, PropTypes }  from 'react'
import Article from './Article'
import Accordion from '../decorators/accordion'


function ArticleList (props) { // optimization to stateless component
  const { articles, openItemId, openItem } = props

  return (
    <ul>
      {getArticleItems(props)}
    </ul>
  )
}
ArticleList.propTypes = {
   articles   : PropTypes.array
  ,openItemId : PropTypes.string
  ,openItem   : PropTypes.func
}

function getArticleItems(props) {
    const { articles, openItemId, openItem } = props
    const articleItems = articles.map(article => (
        <li key = {article.id}>
            <Article
                article = {article}
                isOpen = {article.id == openItemId}
                toggleOpen = {openItem(article.id)}
            />
        </li>
    ))
    return articleItems
}

// class ArticleList extends Component { // es6 component
//
//     static propTypes = {
//        articles   : PropTypes.array
//       ,openItemId : PropTypes.string
//       ,openItem   : PropTypes.func
//     }
//
//     render() {
//         const { articles, openItemId, openItem } = this.props
//         const articleItems = articles.map(article => (
//             <li key = {article.id}>
//                 <Article
//                     article = {article}
//                     isOpen = {article.id == openItemId}
//                     toggleOpen = {openItem(article.id)}
//                 />
//             </li>
//         ))
//
//         return (
//             <ul>
//                 {articleItems}
//             </ul>
//         )
//     }
// }

export default Accordion(ArticleList)
