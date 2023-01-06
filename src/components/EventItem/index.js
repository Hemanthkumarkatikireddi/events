// Write your code here
import './index.css'

const EventItem = props => {
  const {eventsList, selectedEvent} = props
  const {id, imageUrl, name, location} = eventsList

  const onClickEvent = () => {
    selectedEvent(id)
  }

  return (
    <li className="event-item-container">
      <button className="event-btn" type="button">
        <div className="event-items">
          <img
            className="event-img"
            src={imageUrl}
            alt="event"
            onClick={onClickEvent}
          />
          <p className="event-title">{name}</p>
          <p className="event-location">{location}</p>
        </div>
      </button>
    </li>
  )
}

export default EventItem
