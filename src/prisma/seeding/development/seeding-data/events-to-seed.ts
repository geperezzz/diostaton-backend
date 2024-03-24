export const eventsToSeed = [
  {
    id: 'a79fab47-1c70-4eaf-95af-43c0cce4f50f',
    serviceName: 'Ticket for a Taylor Swift concert in Amsterdam',
    serviceDescription: 'Attend to a Taylor Swift concert at the Johan Cruyff Arena in Amsterdam',
    serviceLocation: 'Amsterdam, Netherlands',
    servicePrice: 150,
    serviceTimestamp: new Date('2024-07-04T18:00:00+01:00'),
    eventType: 'Concert',
    endOfEventTimestamp: new Date('2024-07-04T22:00:00+01:00'),
  },
  {
    id: '75476841-cb46-4fba-aa84-5825088ea3c8',
    serviceName: 'Ticket for a Beyonce concert in London',
    serviceDescription: 'Attend to a Beyonce concert at the O2 Arena in London',
    serviceLocation: 'London, UK',
    servicePrice: 200,
    serviceTimestamp: new Date('2024-07-10T19:00:00+01:00'),
    eventType: 'Concert',
    endOfEventTimestamp: new Date('2024-07-10T23:00:00+01:00'),
  },
  {
    id: 'f279e2f1-d96d-42a0-a683-767d1e34a1f3',
    serviceName: 'Ticket for a U2 concert in Dublin',
    serviceDescription: 'Attend to a U2 concert at the Croke Park in Dublin',
    serviceLocation: 'Dublin, Ireland',
    servicePrice: 180,
    serviceTimestamp: new Date('2024-07-15T20:00:00+01:00'),
    eventType: 'Concert',
    endOfEventTimestamp: new Date('2024-07-15T23:30:00+01:00'),
  },
  {
    id: '2619fff3-ab86-4e63-9807-c844a4d21b30',
    serviceName: 'Ticket for a Coldplay concert in Paris',
    serviceDescription: 'Attend to a Coldplay concert at the Stade de France in Paris',
    serviceLocation: 'Paris, France',
    servicePrice: 160,
    serviceTimestamp: new Date('2024-07-20T20:00:00+02:00'),
    eventType: 'Concert',
    endOfEventTimestamp: new Date('2024-07-20T23:00:00+02:00'),
  },
  {
    id: 'a4559f51-d00a-4300-bb87-24661b54cf29',
    serviceName: 'Ticket for a Ed Sheeran concert in Berlin',
    serviceDescription: 'Attend to a Ed Sheeran concert at the Olympiastadion in Berlin',
    serviceLocation: 'Berlin, Germany',
    servicePrice: 140,
    serviceTimestamp: new Date('2024-07-25T19:00:00+02:00'),
    eventType: 'Concert',
    endOfEventTimestamp: new Date('2024-07-25T22:30:00+02:00'),
  },
] as const;