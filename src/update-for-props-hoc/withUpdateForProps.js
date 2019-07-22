import React from 'react'

const withUpdateForProps = updateForProps => Component => {
  class WithUpdateForProps extends React.Component {
    shouldComponentUpdate(nextProps) {
      let shouldUpdate = true
      if (Array.isArray(updateForProps)) {
        shouldUpdate = updateForProps.some(propName => (
          this.props[propName] !== nextProps[propName]
        ))
      }

    return shouldUpdate
    }
    render() {
      return <Component {...this.props} />
    }
  }
  WithUpdateForProps.displayName = 
    `WithUpdateForProps(${Component.displayName || Component.name || 'Component'})`
  
  return  WithUpdateForProps
}

 export default withUpdateForProps