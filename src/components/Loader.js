import React, { PropTypes } from 'react'

function Loader(props,context) {
    const { loaderTitle } = context.localization.dictionary[context.localization.checkedLng]

    return (
        <h2>{loaderTitle}</h2>
    )
}


Loader.propTypes = {
}

Loader.contextTypes = {
  localization: PropTypes.object
}

export default Loader
