import React from 'react'

export default (Component) => class AccordionArticles extends React.Component {
		// constructor() {  // ES6 set default state
		// 		super()
		// 		this.state = {
		// 				openArticleId: null
		// 		}
		// }
		state = { // ES7 set default state
				openArticleId: null
		}


    render() {
        return <Component {...this.props} {...this.state} openArticle = {this.openArticle}/>
    }

		openArticle = (id) => ev => { // карринг
        const { openArticleId } = this.state
        this.setState({
            openArticleId: (openArticleId !== id) ? id : null
        })
    }

}
