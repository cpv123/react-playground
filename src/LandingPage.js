import React from 'react'
import ExamplesButton from './ExamplesButton'
import routesConfig from './routes-config'

function LandingPage() {
  const routeNames = Object.keys(routesConfig)
  const halfRoutes = routeNames.length / 2
  const firstHalf = routeNames.reduce((acc, curr, index) => {
    if (index < halfRoutes) {
      acc[curr] = routesConfig[curr]
    }
    return acc
  }, {})

  const secondHalf = routeNames.reduce((acc, curr, index) => {
    if (index >= halfRoutes) {
      acc[curr] = routesConfig[curr]
    }
    return acc
  }, {})

  return (
    <>
      <ExamplesButton
        title='See examples'
        routes={firstHalf}
      />
      <ExamplesButton 
        title='See more examples'
        routes={secondHalf}
      />
    </>
  )
}

export default LandingPage
