import React, { Component, PropTypes } from 'react'

class ArticleIndexPage extends Component {
    static propTypes = {

    };
    static contextTypes = {
        localization: PropTypes.object
    }

    render() {
      const { articleIndexPageTitle } = this.context.localization.dictionary[this.context.localization.checkedLng]
        return (
            <h1>
              {articleIndexPageTitle}
            </h1>
        )
    }
}

export default ArticleIndexPage
