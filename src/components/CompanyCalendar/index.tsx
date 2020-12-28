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

import Selection from 'react-select';
import { locationsData, groupsData } from '../../data';

import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green, grey } from '@material-ui/core/colors';

import './styles.css';


const Calendar: React.FC = () => {
  const [currentEvents, setCurrentEvents] = useState([])
  const [show, setShow] = useState(false)
  const [modal, setModal] = useState<boolean>(false)
  const [title, setTitle] = useState<string>()
  const [eventAddress, setEventAddress] = useState<string>()
  const [type, setType] = useState<string>('')
  const [group, setGroup] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [color, setColor] = useState<string>('#FFC138')
  const [showGroup, setShowGroup] = useState<boolean>(false)
  const [showLocation, setShowLocation] = useState<boolean>(false)
  const [startTime, setStartTime] = useState<string>()
  const [endTime, setEndTime] = useState<string>()
  const [personal, setPersonal] = useState<boolean>(false)
  const [general, setGeneral] = useState<boolean>(false)

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
    console.log(clickInfo.event)
    // if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    //   clickInfo.event.remove()
    // }
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
    if (title === "") {
      alert("invalid title")
    }

    else if (title !== ""
      && type !== ""
    ) {
      const data =
      {
        title: title,
        type: type,
        location: location,
        group: group,
        address: eventAddress,
        description: description,
        start: startTime,
        end: endTime,
        color: color,
        extendedProps: {
          department: 'Employe'
        }
      }
      try {
        // await axios.put(`/api/v1/calendar`, data);
        alert(`Event Created`);
        console.log(data)
        setModal(false)
      } catch (error) {
        alert('Error updating user');
      }
    }
  }

  function handleShowGroup() {
    if (showGroup === true) {
      setShowGroup(false)
      setColor('')
    }
    if (showGroup === false) {
      setShowGroup(true)
      setColor('#ffc138')
    }
  }

  function handleShowLocation() {
    if (showLocation === true) {
      setShowLocation(false)
      setColor('')
    }
    if (showLocation === false) {
      setShowLocation(true)
      setColor('#f74f41')
    }
  }

  function handlePersonalEvent() {
    if (personal === true) {
      setPersonal(false)
      setColor('')
    }
    if (personal === false) {
      setPersonal(true)
      setColor('#418dee')
    }
  }

  function handleGeneralEvent() {
    if (general === true) {
      setGeneral(false)
      setColor('')
    }
    if (general === false) {
      setGeneral(true)
      setColor('#007619')
    }
  }

  const handleChangeType = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string)
  };

  const handleSelectGroup = (event: any) => {
    setGroup(event)
  };
  const handleSelectLocation = (event: any) => {
    setLocation(event)
  };

  withStyles({
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
          <h2>New Event</h2>
        </div>
        <div className="modal-box">
          <form>
            <TextField id="standard-basic" label="Add Title"
              placeholder=""
              onChange={e => setTitle(e.target.value)}
            />

            <FormControl>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
              <Select
                value={type}
                onChange={handleChangeType}
              >
                <MenuItem value={"01"}>Meeting</MenuItem>
                <MenuItem value={"02"}>Conference Call</MenuItem>
                <MenuItem value={"03"}>Project Delivery</MenuItem>
                <MenuItem value={"04"}>Reporting</MenuItem>
                <MenuItem value={"05"}>Travel and Vacation</MenuItem>
                <MenuItem value={"06"}>Location Opening</MenuItem>

              </Select>
            </FormControl>

            <div className="groupsSection">
              <button className="button" style={{ background: "#418dee" }} disabled={general} type="button" onClick={() => handlePersonalEvent()}>Personal Event</button>
              <button className="button" style={{ background: "#f74f41" }} disabled={personal || general} type="button" onClick={() => handleShowLocation()} >Local Event</button>
              <button className="button" style={{ background: "#ffc138" }} disabled={personal || general} type="button" onClick={() => handleShowGroup()} >Group Event</button>
              <button className="button" style={{ background: "#007619" }} disabled={personal} type="button" onClick={() => handleGeneralEvent()}>General Event</button>
            </div>

            <div style={{
              display: showLocation ? "block" : "none",
              width: "100%",
              marginLeft: "10%",
            }}>
              <Selection
                isMulti
                name="colors"
                options={locationsData}
                className="basic-multi-select"
                placeholder="Select Locations"
                onChange={handleSelectLocation}
              />
            </div>

            <div style={{
              display: showGroup ? "block" : "none",
              width: "100%",
              marginLeft: "10%",
              marginTop: "1rem"
            }}>
              <Selection
                isMulti
                name="colors"
                options={groupsData}
                className="basic-multi-select"
                placeholder="Select Groups"
                onChange={handleSelectGroup}
              />
            </div>

            <TextField id="standard-basic"
              label="Event Address or Meeting Link"
              placeholder=""
              onChange={e => setEventAddress(e.target.value)}
            />

            <br />

            <TextField
              id="standard-multiline-static"
              label="Description"
              multiline
              onChange={e => setDescription(e.target.value)}
              rowsMax={4}
            />

            <br />

            <TextField
              id="datetime-start"
              label="Start time"
              type="datetime-local"
              defaultValue="2020-01-01T10:30"
              onChange={e => setStartTime(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <br />

            <TextField
              id="datetime-end"
              label="End time"
              type="datetime-local"
              defaultValue="2020-01-01T10:30"
              onChange={e => setEndTime(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
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
                right: 'listMonth,timeGridDay,timeGridWeek,dayGridMonth,today'
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