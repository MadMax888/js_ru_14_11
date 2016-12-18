import React, { PropTypes } from 'react'

function Loader(props,context) {
    //общее замечание ко всем остальным местам - лучше выносить эту логику в отдельные компоненты, например LocalizedText,
    //которые будут прятать этот механизм, по примеру Link
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
