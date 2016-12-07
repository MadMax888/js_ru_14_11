import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { Map } from 'immutable'

const defaultArticles = normalizedArticles.reduce( (prevArticles, curArticle, i) => {
    return prevArticles.set(curArticle.id, curArticle)
  }
  , new Map({})
  )

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.filter(article => article.id != payload.articleId)

        case ADD_COMMENT:
          const { genId } = action

          return articlesState.map( (article, key) => {
              if (key === payload.articleId) {
                article.comments.push(genId)
              }
              return article
            }
          )
    }

    return articlesState
}
