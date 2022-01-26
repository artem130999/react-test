import * as React from 'react'
import { EventContext } from '../../contexts'
import EventItem from './EventItem'

const EventList = () => {
  const { list: eventList, getFilteredEvents, error } = React.useContext(
    EventContext,
  )

  const filteredEventList = getFilteredEvents()

  const renderEventList = () => {
    if (error) {
      return <div className='event-list__helper'>{error}</div>
    }

    if (!eventList?.length) {
      return <div className='event-list__helper'>No data</div>
    }

    if (!filteredEventList?.length) {
      return <div className='event-list__helper'>Not found</div>
    }

    return filteredEventList.map(event => (
      <EventItem key={event.messageId} event={event} />
    ))
  }

  return <div className='event-list'>{renderEventList()}</div>
}

export default EventList
