import { useEffect, useState } from "react";
import { fetchEvents } from "./events";
import { Event } from "./types";

const EventList = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <ul>
      {events.map(event => (
        <li key={event.event_id}>
          {event.title} - {event.event_date}
        </li>
      ))}
    </ul>
  );
};

export default EventList;
