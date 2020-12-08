
let eventGuid = 0
// let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = {
  eventColor: 'green',
  events: [
    {
      title: 'Local Event',
      start: '2020-12-07',
      end: '2020-12-10',
      color: 'purple',
      extendedProps: {
        department: 'Employees'
      }
    },
    {
      groupId: '999',
      title: 'Company Event',
      start: '2020-12-09T16:00:00',
      color: 'purple',
      extendedProps: {
        department: 'Partner'
      }
    },
    {
      title: 'Company Conference',
      start: '2020-12-11',
      end: '2020-12-13',
      color: 'purple',
      extendedProps: {
        department: 'Employe'
      }
    },
    {
      title: 'Click for Google',
      url: 'http://google.com/',
      color: 'green',
      start: '2020-12-28',
      extendedProps: {
        department: 'Partner'
      }
    }
  ]
};

export function createEventId() {
  return String(eventGuid++)
}
