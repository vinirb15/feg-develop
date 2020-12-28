
let eventGuid = 0
// let todayStr = new Date().toISOString().split('T')[1].replace(/\..*$/, '') // time of today
// let todayStrbr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = {
  events: [
    {
      id: 'a32s1d3a21sd1',
      title: 'Personal Events',
      start: '2020-12-07',
      end: '2020-12-10',
      color: '#418DEE',
      description: 'this is one simple description',
      extendedProps: {
        department: 'Employees'
      }
    },
    {
      allDay: true,
      id: 'asddddadas',
      address: "event address or meeting link",
      color: "#ffc138",
      description: "description",
      end: "2020-12-09T10:35",
      extendedProps: { department: "Employe" },
      group: [{ value: "fb006748-92f7-4756-8e55-a53764741e99", label: "General Manager" }, { value: "fb006748-92f7-4756-8e55-a53764741e99", label: "Manager" }],
      location: [{ value: "fb006748-92f7-4756-8e55-a53764741e99", label: "General Manager" }, { value: "fb006748-92f7-4756-8e55-a53764741e99", label: "Manager" }],
      start: "2020-12-09T10:30",
      title: "Group Event",
      type: "02"
    },
    {
      id: 'a32s1asdada1',
      groupId: '999',
      title: 'Local Events',
      start: '2020-12-09T16:00:00',
      end: '2020-12-09T17:00:00',
      color: '#F74F41',
      extendedProps: {
        department: 'Partner'
      }
    },
    {
      id: 'a32s1d3a21sd1asdsad',
      title: 'Group Events',
      start: '2020-12-11 T12:00:00',
      end: '2020-12-11 T14:00:00',
      color: '#FFC138',
      extendedProps: {
        department: 'Employe'
      }
    },
    {
      id: 'a32s1d3a21sd1asdadad',
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
