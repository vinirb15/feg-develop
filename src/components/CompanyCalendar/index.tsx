import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import TextField from '@material-ui/core/TextField';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';

import axios from 'axios';

import './styles.css';


const Calendar: React.FC = () => {
  const [currentEvents, setCurrentEvents] = useState([])
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState<boolean>(false)
  const [title, setTitle] = useState<string>()
  const [type, setType] = useState<string>()
  const [startTime, setStartTime] = useState<string>()
  const [endTime, setEndTime] = useState<string>()
  const [location, setLocation] = useState<string>()
  const [boxChecked, setChecked] = useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });


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



  async function handleUpdate() {
    if (location === "") {
      alert("invalid location")
    }
    if (title === "") {
      alert("invalid title")
    }


    else if (title !== "" && location !== "") {
      const data =
      {
        title: title,
        location: location,
        start: '2020-12-11' + 'T12:00:00',
        end: '2020-12-11' + 'T14:00:00',
        color: '#FFC138',
        extendedProps: {
          department: 'Employe'
        }
      }
      try {
        // await axios.put(`https://api-systemfegllc.herokuapp.com/api/v1/calendar`, data);
        alert(`Event Created`);
        setModal(false)
      } catch (error) {
        alert('Error updating user');
      }
    }
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string)
  };

  const GreenCheckbox = withStyles({
    root: {
      color: grey[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props: CheckboxProps) => <Checkbox color="primary" {...props} />);

  const modalBox = (
    <div id="myModal" className="modal" style={{ display: modal ? "block" : "none" }}>
      <div className="modal-body">
        <div className="modal-header">
          <span onClick={() => setModal(false)} className="close">&times;</span>
          <h2>Update User</h2>
        </div>
        <div className="modal-box">
          <form>
            <TextField id="standard-basic" label="Event Title"
              placeholder=""
              onChange={e => setTitle(e.target.value)}
            />

            <FormControl>
              <InputLabel id="demo-simple-select-label">Event Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                onChange={handleChange}
              >
                <MenuItem value={"Meeting"}>Meeting</MenuItem>
                <MenuItem value={"Conference Call"}>Conference Call</MenuItem>
                <MenuItem value={"Project Delivery"}>Project Delivery</MenuItem>
                <MenuItem value={"Reporting"}>Reporting</MenuItem>
                <MenuItem value={"Travel and Vacation"}>Travel and Vacation</MenuItem>
                <MenuItem value={"Location Opening"}>Location Opening</MenuItem>

              </Select>
            </FormControl>

            <br />

            <TextField
              id="datetime-local"
              label="Start time"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              onChange={e => setStartTime(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <br />

            <TextField
              id="datetime-local"
              label="End time"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              onChange={e => setEndTime(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <div className="checkbox">
              <FormControlLabel
                control={
                  <GreenCheckbox
                    // checked={state.checkedG}
                    // onChange={handleChange}
                    name="checkedG"
                  />}
                label="Personal"
              />

              <FormControlLabel
                control={
                  <GreenCheckbox
                    // checked={state.checkedG}
                    // onChange={handleChange}
                    name="checkedG"
                  />}
                label="Local"
              />

              <FormControlLabel
                control={
                  <GreenCheckbox
                    // checked={state.checkedG}
                    // onChange={handleChange}
                    name="checkedG"
                  />}
                label="Group"
              />

              <FormControlLabel
              // style={{display: "none"}}
                control={
                  <GreenCheckbox
                    // checked={state.checkedG}
                    // onChange={handleChange}
                    name="checkedG"
                  />}
                label="General"
              />
            </div>

            <button className="button" onClick={() => handleUpdate()} type="button">Create Event</button>

          </form>
        </div>
      </div>
    </div>)

  return (
    <div className="calendar-app">
      {modalBox}
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
                    setModal(true)
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
                left: 'prev,next myCustomButton myCustomButton2',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek,today'
              }}
              initialView='dayGridMonth'
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              weekends={true}
              initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
              // select={handleDateSelect}
              eventContent={renderEventContent} // custom render function
              // eventClick={handleEventClick}
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