import React from 'react'

export default (Component) => class Accordion extends React.Component { // ???
		// constructor() {  // ES6 set default state
		// 		super()
		// 		this.state = {
		// 				openArticleId: null
		// 		}
		// }
		state = { // ES7 set default state
				//не привязывайся к названиям сущностей в декораторах, вся их суть в том, чтобы использовать с разными компонентами и данными. Сделай openItemId
				openItemId: null
		}


    render() {
        return <Component {...this.props} {...this.state} openItem = {this.openItem}/>
    }

		openItem = (id) => ev => { // карринг
        const { openItemId } = this.state
        this.setState({
            openItemId: (openItemId !== id) ? id : null
        })
    }

}
