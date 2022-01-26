import * as React from 'react'
import { socket } from '../core'
import { IEvent } from '../interfaces'

const useEventService = ({ isFetching }: any) => {
  const [eventList, setEventList] = React.useState<IEvent[]>([])
  const [error, setError] = React.useState<string>(null!)

  React.useEffect(() => {
    if (!isFetching) {
      socket.off('message')
      socket.off('error')
      return
    }

    socket.on('message', (data: IEvent) => {
      setEventList(prev => {
        const arr = [...prev, data]

        if (arr.length > 100) {
          return arr.slice(100)
        }

        return arr
      })
    })

    socket.on('error', (error: any) => {
      console.error(error)

      setError(error)

      socket.off('error')

      socket.emit('error', error)
    })
  }, [isFetching])

  return { eventList, error }
}

export default useEventService
