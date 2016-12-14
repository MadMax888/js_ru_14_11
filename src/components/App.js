import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import Filters from './Filters'
import Counter from './Counter'
import { connect } from 'react-redux'
import { loadAllComments } from '../AC/comments'

class App extends Component {

    componentDidMount() {
      console.log("Mounted APP -----")
      this.props.loadAllComments()
    }

    componentWillReceiveProps() {
      console.log("componentWillReceiveProps APP -----")
    }

    render() {
        return (
            <div>
                <Counter />
                <Filters />
                <ArticleList />
            </div>
        )
    }
}

export default connect(null,{loadAllComments})(App)
