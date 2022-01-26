import { format } from 'date-fns'
import { IEvent } from '../../interfaces'
import { ReactComponent as CheckSvg } from '../../assets/images/check.svg'

type EventItemProps = {
  event: IEvent
}

const EventItem = ({ event }: EventItemProps) => {
  return (
    <div className='event-list__item'>
      <div className='event-list__item-mark'>
        <CheckSvg />
      </div>
      <div className='event-list__item-type'>{event.type}</div>
      <div className='event-list__item-value'>{event.value}</div>
      <div className='event-list__item-date'>
        {format(new Date(event.receivedAt), 'uuuu/MM/dd kk:mm:ss')}
      </div>
    </div>
  )
}

export default EventItem
