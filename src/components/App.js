import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import Chart from './Chart'
import 'react-select/dist/react-select.css'
import Calendar from './Calendar'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <Chart />
                <ArticleList articles={this.props.articles} />
                <Select options = {options} value = {this.state.selected} onChange = {this.handleChange} multi = {true}/>
                <Calendar />
            </div>
        )
    }

    handleChange = selected => this.setState({ selected })
}

export default App
