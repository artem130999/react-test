import * as React from 'react'
import HeaderButtons from './HeaderButtons'
import HeaderSearchBox from './HeaderSearchBox'

const Header = () => {
  return (
    <div className='app-header'>
      <HeaderButtons />

      <HeaderSearchBox />
    </div>
  )
}

export default Header
