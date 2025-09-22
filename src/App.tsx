import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { LoginForm } from "./components/LoginForm";
import { OrganizerDashboard } from "./components/OrganizerDashboard";
import { AttendeeView } from "./components/AttendeeView";

import "./App.css";
import Header from "./components/header.jsx";
import Hero from "./components/hero.jsx";
import PopularEvents from "./components/PopularEvents.tsx";

interface User {
  name: string;
  type: "organizer" | "attendee";
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userType: "organizer" | "attendee", name: string) => {
    setUser({ name, type: userType });
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <LoginForm onLogin={handleLogin} />;
  }

  if (user.type === "organizer") {
    return <OrganizerDashboard userName={user.name} onLogout={handleLogout} />;
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <PopularEvents />
      </BrowserRouter>
      <AttendeeView userName={user.name} onLogout={handleLogout} />
    </>
  );
}
