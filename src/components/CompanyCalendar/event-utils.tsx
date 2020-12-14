
let eventGuid = 0
// let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = {
  eventColor: 'green',
  events: [
    {
      title: 'Personal Events',
      start: '2020-12-07',
      end: '2020-12-10',
      color: '#418DEE',
      extendedProps: {
        department: 'Employees'
      }
    },
    {
      groupId: '999',
      title: 'Local Events',
      start: '2020-12-09T16:00:00',
      color: '#F74F41',
      extendedProps: {
        department: 'Partner'
      }
    },
    {
      title: 'Group Events',
      start: '2020-12-11' + 'T12:00:00',
      end: '2020-12-11' + 'T14:00:00',
      color: '#FFC138',
      extendedProps: {
        department: 'Employe'
      }
    },
    {
      title: 'General Events',
      start: '2020-12-09',
      end: '2020-12-11',
      color: '#007619',
      extendedProps: {
        department: 'Employe'
      }
    },
    // {
    //   title: 'Click for Google',
    //   url: 'http://google.com/',
    //   color: 'green',
    //   start: '2020-12-28',
    //   extendedProps: {
    //     department: 'Partner'
    //   }
    // }
  ]
};

export function createEventId() {
  return String(eventGuid++)
}
