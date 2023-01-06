import {Component} from 'react'

import './index.css'
import ActiveEventRegistration from '../ActiveEventRegistrationDetails'

import EventItem from '../EventItem'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]
// Write your code here

const userRegistrationStatus = {
  initial: 'INITIAL',
  register: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrations_closed: 'REGISTRATIONS_CLOSED',
}

class Events extends Component {
  state = {
    userEvent: [],
    apiStatus: userRegistrationStatus.initial,
  }

  eventStatus = id => {
    // const {userEvent} = this.state
    console.log(id)
    const value = eventsList.find(every => every.id === id)
    this.setState({apiStatus: value.registrationStatus})
  }

  eventStatusInitial = () => (
    <div className="initial-event">
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  eventStatusRegister = () => (
    <div className="status-container">
      <img
        className="register-img"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="status-container-description">
        A live performance brings so much to your relationship with dance
        {/* A live performance bring so much to your relationship to dance. seeing
        dance live can often make you fall totally in love with this beautiful
        art form. */}
      </p>
      <button type="button" className="btn">
        Register Here
      </button>
    </div>
  )

  eventStatusRegistered = () => (
    <div className="status-container">
      <img
        className="register-img"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
      />
      <h1 className="status-container-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  eventStatusRegistrationsClosed = () => (
    <div className="status-container">
      <img
        className="register-img"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1 className="status-container-heading">
        Registrations are Closed Now!
      </h1>
      <p className="status-container-description">
        Stay tuned. We will reopen <br /> the registrations soon!
      </p>
    </div>
  )

  userEventStatus = () => {
    const {userEvent, apiStatus} = this.state
    const {registrationStatus} = userEvent
    console.log(registrationStatus)

    switch (apiStatus) {
      case userRegistrationStatus.initial:
        return this.eventStatusInitial()
      case userRegistrationStatus.register:
        return this.eventStatusRegister()
      case userRegistrationStatus.registered:
        return this.eventStatusRegistered()
      case userRegistrationStatus.registrations_closed:
        return this.eventStatusRegistrationsClosed()
      default:
        return null
    }
  }

  render() {
    const {apiStatus} = this.state
    return (
      <div className="events-container">
        <div className="list-of-Events">
          <h1 className="heading">Events</h1>

          <ul>
            {eventsList.map(every => (
              <EventItem
                eventsList={every}
                key={every.id}
                selectedEvent={this.eventStatus}
              />
            ))}
          </ul>
        </div>
        <div className="event-status-container">
          <ActiveEventRegistration
            value={this.userEventStatus()}
            status={apiStatus}
          />
        </div>
      </div>
    )
  }
}

export default Events
