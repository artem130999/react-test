import * as React from 'react'
import { EventContext } from '../../contexts'
import { useInput } from '../../hooks'
import { debounce } from '../../utils'

const DEBOUNCE_DELAY = 300

const HeaderSearchBox = () => {
  const { setFilterValue } = React.useContext(EventContext)
  const { inputValue, inputOnChange } = useInput()

  const changeFilterValue = debounce(setFilterValue, DEBOUNCE_DELAY)

  React.useEffect(() => {
    changeFilterValue(inputValue)
  }, [inputValue, changeFilterValue])

  return (
    <div className='app-header__search-box'>
      <input
        type='text'
        className='input app-header__search-input'
        placeholder='Type to search...'
        value={inputValue}
        onChange={inputOnChange}
      />
    </div>
  )
}

export default HeaderSearchBox
