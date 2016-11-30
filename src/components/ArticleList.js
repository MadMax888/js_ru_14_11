import React, { Component, PropTypes }  from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        isOpen: PropTypes.func.isRequired,
        toggleOpenItem: PropTypes.func.isRequired
    }

    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentDidMount() {
        console.log('---', 'mounted', this.containerRef)
        console.log('---', this.refs)
    }

    componentWillReceiveProps(nexProps) {
        //console.log('isEqual', Object.keys(nexProps).every(key => nexProps[key] == this.props[key]))
        //console.log('---', 'AL receiving props')
    }

    componentWillUpdate() {
        //console.log('---', 'AL will update')
    }

    getContainerRef = ref => {
        this.containerRef = ref
    }
    filterArticles () {
      const { articles, from, to, optionsSelected } = this.props
      let filterArticles = articles.filter((article) => {
            for( let opt of optionsSelected) {
              if (article.id === opt.value) {
                if ( from == null && to == null ) {
                  return true
                } else if (from != null && to == null) {
                    if ( Date.parse(from) >= Date.parse(article.date)) return true
                } else if ( from != null && to != null) {
                  if ( Date.parse(from) >= Date.parse(article.date)
                      && Date.parse(article.date) <= Date.parse(to)) return true
                }
              }
            }
            return false
      })

      return filterArticles
    }

    render() {
        const { articles, isOpen, toggleOpenItem, from, to, optionsSelected } = this.props

        const filteredArticles = this.filterArticles().length <= 0
                                  ? articles
                                  : this.filterArticles()
                                  
        const articleItems =  filteredArticles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {isOpen(article.id)}
                    toggleOpen = {toggleOpenItem(article.id)}
                />
            </li>
        ))

        return (
            <ul ref = {this.getContainerRef}>
                {articleItems}
            </ul>
        )
    }
}

export default connect(state => ({
    articles: state.articles
    ,from: state.date.from
    ,to: state.date.to
    ,optionsSelected: state.options.optSelected
}))(accordion(ArticleList))
