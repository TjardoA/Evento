import React from "react";
import EventList from "./EventList";

export default function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Evento Database Test</h1>
      <p>This is the App inside <code>src/database/</code></p>

      {/* Show events from the database */}
      <EventList />
    </div>
  );
}

//This is ONLY for testing