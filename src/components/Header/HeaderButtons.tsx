import * as React from 'react'
import { EventContext } from '../../contexts'
import { Button } from '../UI'

const HeaderButtons = () => {
  const { isFetching, turnOnFetching, turnOffFetching } = React.useContext(
    EventContext,
  )

  return (
    <div className='app-header__btns'>
      <Button
        styleType='primary'
        className='app-header__btn'
        isActive={isFetching}
        onClick={turnOnFetching}>
        Live
      </Button>

      <Button
        styleType='primary'
        className='app-header__btn'
        isActive={!isFetching}
        onClick={turnOffFetching}>
        Pause
      </Button>
    </div>
  )
}

export default HeaderButtons
