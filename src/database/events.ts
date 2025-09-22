import { Event } from "./types";

const API_URL = "http://localhost:5000/events";

export async function fetchEvents(): Promise<Event[]> {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addEvent(newEvent: Omit<Event, "event_id">): Promise<Event> {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newEvent),
  });
  return res.json();
}

export async function updateEvent(id: number, updatedData: Partial<Event>): Promise<Event> {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedData),
  });
  return res.json();
}

export async function deleteEvent(id: number): Promise<void> {
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
