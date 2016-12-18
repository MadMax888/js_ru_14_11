import React, { Component, PropTypes } from 'react'

class Menu extends Component {
    static propTypes = {

    };

  static contextTypes = {
      localization: PropTypes.object
  }

    render() {
        const { menuTitle } = this.context.localization.dictionary[this.context.localization.checkedLng]
        return (
            <div>
                <h3>{menuTitle}</h3>
                <section>
                    {this.props.children}
                </section>
            </div>
        )
    }
}

export default Menu
