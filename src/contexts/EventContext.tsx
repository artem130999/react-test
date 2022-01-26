import * as React from 'react'
import { useEventService, useInput } from '../hooks'
import { IEvent } from '../interfaces'

type EventContextProps = {
  list: IEvent[]
  isFetching: boolean
  filterValue?: string
  turnOnFetching?: () => void
  turnOffFetching?: () => void
  getFilteredEvents: () => IEvent[]
  setFilterValue?: any
  error?: string
}

export const EventContext = React.createContext<EventContextProps>({
  list: [],
  isFetching: false,
  getFilteredEvents: null!,
})

export const EventProvider = ({ children }: any) => {
  const [isFetching, setIsFetching] = React.useState(false)
  const { eventList, error } = useEventService({ isFetching })
  const { inputValue: filterValue, setValue: setFilterValue } = useInput()

  console.log(eventList)
  const getFilteredEvents = () => {
    return eventList.filter(event =>
      event.value.toLowerCase().startsWith(filterValue.toLowerCase()),
    )
  }

  const turnOnFetching = () => {
    setIsFetching(true)
  }

  const turnOffFetching = () => {
    setIsFetching(false)
  }

  return (
    <EventContext.Provider
      value={{
        list: eventList,
        isFetching,
        turnOffFetching,
        turnOnFetching,
        getFilteredEvents,
        filterValue,
        setFilterValue,
        error,
      }}>
      {children}
    </EventContext.Provider>
  )
}

export default EventContext
