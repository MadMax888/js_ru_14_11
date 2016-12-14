import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Menu from '../components/Menu'
import MenuItem from '../components/Menu/MenuItem'
import { connect } from 'react-redux'
import { loadAllComments } from '../AC/comments'

class Root extends Component {
    static propTypes = {

    };
    componentDidMount() {
      console.log("Mounted APP -----")
      const action = loadAllComments()
      store.dispatch(action)
    }

    render() {
        return (
            <Provider store={store}>
                <div>
                    <Menu>
                        <MenuItem link = "/articles" name="Articles index"/>
                        <MenuItem link = "/filters" name="Filters"/>
                        <MenuItem link = "/counter" name="Counter"/>
                        <MenuItem link = "/comments" name="Comments"/>
                    </Menu>
                    {this.props.children}
                </div>
            </Provider>
        )
    }
}

export default Root
