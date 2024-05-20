import React from 'react'
import BuildingsComponent from '../../component/buildings/components'
import BuildingsHero from '../../component/buildings/hero'
import Select from '../../component/select'

const BuildingsPages = () => {
  return (
    <>
      <Select />
      <BuildingsHero />
      <BuildingsComponent />
    </>
  )
}

export default BuildingsPages