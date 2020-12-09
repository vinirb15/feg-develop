import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './event-utils';

import './styles.css';

const Calendar: React.FC = () => {
  const [currentEvents, setCurrentEvents] = useState([])
  const [show, setShow] = useState(false)


  function handleDateSelect(selectInfo: any) {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar
    console.log(selectInfo)

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  function handleEventClick(clickInfo: any) {
    if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove()
    }
  }


  function handleEvents(events: any) {
    console.log(events)
    setCurrentEvents(events)
  }

  function renderEventContent(eventInfo: any) {
    return (
      <>
        <b>{eventInfo.timeText} </b>
        <i> {eventInfo.event.title}</i>
      </>
    )
  }


  function changeState(boolean: any) {
    if (boolean === true) {
      setShow(false)
    }
    else {
      setShow(true)
    }
  }

  function renderSidebarEvent(event: any) {
    return (
      <li key={event.id}>
        <p style={{ backgroundColor: event.backgroundColor ? event.backgroundColor : "#3788d8", border: event.borderColor }} className="list-itens">{event.title}</p>
        <div style={{ display: show ? "block" : "none" }} >
          <b> {(event.startStr ? "Start: " : "") + event.startStr.split('').splice(0, 10).join('')} </b>
          <b> {event.startStr.split('').splice(11, 5).join('')}</b>
          <br />
          <b> {(event.endStr ? "End: " : "") + event.endStr.split('').splice(0, 10).join('')} </b>
          <b> {event.endStr.split('').splice(11, 5).join('')}</b>
        </div>
      </li>
    )
  }

  return (
    <div className="calendar-app">
      <div className="calendar-content">

        <div className='demo-app-sidebar'>
          <div className='demo-app-sidebar-section'>
            <h2>All Events ({currentEvents.length})</h2>
            <ul>
              {currentEvents.map(renderSidebarEvent)}
              <button className="more-info-button" type="button" onClick={() => changeState(show)}>{show ? "Hide info" : "Show info"}</button>
            </ul>
          </div>
        </div>


        <div className='demo-app'>
          <div className='demo-app-main'>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
              customButtons={{
                myCustomButton: {
                  text: 'Create New Event',
                  click: function () {
                    alert('create new event')
                  },
                },
                myCustomButton2: {
                  text: 'Export event',
                  click: function () {
                    alert('Event exported')
                  },
                }
              }}
              headerToolbar={{
                left: 'prev,next today myCustomButton myCustomButton2',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
              }}
              initialView='dayGridMonth'
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={true}
              initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
              select={handleDateSelect}
              eventContent={renderEventContent} // custom render function
              eventClick={handleEventClick}
              eventsSet={handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar;