import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import Chart from './Chart'
import DateRange from './DateRange'
import Counter from './Counter'
import { refreshOptionsSelected, optionsAll } from '../AC/options'
import { connect } from 'react-redux'
import 'react-select/dist/react-select.css'

class App extends Component {



    render() {
        const { articles, optSelected, optionsFull, optionsAll} = this.props

        // Не понимаю как и где вызывать AC optionsAll, чтоб бы формировать options(30ст)
        // в редьюсере
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Counter />
                <Chart />
                <DateRange />
                <ArticleList />
                <Select options = {options} value = {optSelected} onChange = {this.handleChange} multi = {true} />
            </div>
        )
    }


    handleChange = selected => {
      // console.log('selected---' + selected);
      // console.debug(selected);
        const { refreshOptionsSelected } = this.props
        refreshOptionsSelected(selected)
    }
}

export default connect(state => ({
     articles: state.articles
    ,optSelected: state.options.optSelected
    ,optionsFull: state.options.optionsFull
  }),
  {
    refreshOptionsSelected,
    optionsAll
  }
  )(App)
