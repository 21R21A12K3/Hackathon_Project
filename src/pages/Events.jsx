import React, { useState } from 'react';
import EventCard from '../components/EventCard';

const events = [
  {
    title: 'Hack the Future',
    image: 'https://picsum.photos/seed/hack1/400/250',
    startTime: '2025-07-30T10:00:00Z',
    endTime: '2025-08-01T12:00:00Z',
  },
  {
    title: 'AI Sprint',
    image: 'https://picsum.photos/seed/hack2/400/250',
    startTime: '2025-08-02T10:00:00Z',
    endTime: '2025-08-03T15:00:00Z',
  },
  {
    title: 'CodeStorm',
    image: 'https://picsum.photos/seed/hack3/400/250',
    startTime: '2025-08-04T09:00:00Z',
    endTime: '2025-08-05T10:00:00Z',
  },
  {
    title: 'NextGen Devs',
    image: 'https://picsum.photos/seed/hack4/400/250',
    startTime: '2025-08-06T08:00:00Z',
    endTime: '2025-08-07T20:00:00Z',
  },
  {
    title: 'ByteCraft 2025',
    image: 'https://picsum.photos/seed/hack5/400/250',
    startTime: '2025-08-08T12:00:00Z',
    endTime: '2025-08-09T18:00:00Z',
  },
  {
    title: 'Algo Arena',
    image: 'https://picsum.photos/seed/hack6/400/250',
    startTime: '2025-08-10T10:00:00Z',
    endTime: '2025-08-12T22:00:00Z',
  },
];

const Events = () => {
  const [filter, setFilter] = useState('live');
  const now = new Date();

  const filterEvents = () => {
    switch (filter) {
      case 'live':
        return events.filter(
          (event) =>
            new Date(event.startTime) <= now && new Date(event.endTime) >= now
        );
      case 'upcoming':
        return events.filter((event) => new Date(event.startTime) > now);
      case 'previous':
        return events.filter((event) => new Date(event.endTime) < now);
      default:
        return events;
    }
  };

  const filteredEvents = filterEvents();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-4 ">
    

      <div className="pt-16 pb-4 flex gap-4 ">
        {['live', 'upcoming', 'previous'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-2 py-1 rounded-sm text-white capitalize cursor-pointer ${
              filter === type ? 'bg-blue-400' : 'bg-gray-400 hover:bg-blue-400'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              image={event.image}
              startTime={event.startTime}
              endTime={event.endTime}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No events found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Events;
