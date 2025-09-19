import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { EventEditor } from './EventEditor';
import { Plus, Calendar, MapPin, Users } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  schedule: {
    id: string;
    act: string;
    time: string;
    stage: string;
  }[];
}

interface OrganizerDashboardProps {
  userName: string;
  onLogout: () => void;
}

export function OrganizerDashboard({ userName, onLogout }: OrganizerDashboardProps) {
  const [events, setEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Summer Music Festival',
      date: '2024-07-15',
      location: 'Central Park',
      schedule: [
        { id: '1', act: 'The Cosmic Rays', time: '14:00', stage: 'Main Stage' },
        { id: '2', act: 'Luna Moths', time: '15:30', stage: 'Side Stage' },
        { id: '3', act: 'Electric Dreams', time: '17:00', stage: 'Main Stage' },
      ]
    },
    {
      id: '2',
      title: 'Tech Conference 2024',
      date: '2024-08-22',
      location: 'Convention Center',
      schedule: [
        { id: '4', act: 'AI in the Future', time: '09:00', stage: 'Hall A' },
        { id: '5', act: 'Startup Pitch Session', time: '11:00', stage: 'Hall B' },
      ]
    }
  ]);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [isCreatingEvent, setIsCreatingEvent] = useState(false);

  const handleSaveEvent = (eventData: Omit<Event, 'id'>) => {
    if (editingEvent) {
      setEvents(events.map(e => e.id === editingEvent.id ? { ...eventData, id: editingEvent.id } : e));
      setEditingEvent(null);
    } else {
      const newEvent = { ...eventData, id: Date.now().toString() };
      setEvents([...events, newEvent]);
      setIsCreatingEvent(false);
    }
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(events.filter(e => e.id !== eventId));
  };

  if (isCreatingEvent || editingEvent) {
    return (
      <EventEditor
        event={editingEvent}
        onSave={handleSaveEvent}
        onCancel={() => {
          setIsCreatingEvent(false);
          setEditingEvent(null);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl">Welcome back, {userName}</h1>
            <p className="text-gray-600">Manage your events and schedules</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => setIsCreatingEvent(true)}>
              <Plus className="w-4 h-4 mr-2" />
              New Event
            </Button>
            <Button variant="outline" onClick={onLogout}>
              Logout
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {event.title}
                  <Badge variant="secondary">{event.schedule.length} acts</Badge>
                </CardTitle>
                <CardDescription className="space-y-1">
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <h4 className="text-sm">Upcoming Acts:</h4>
                  {event.schedule.slice(0, 3).map((item) => (
                    <div key={item.id} className="text-sm text-gray-600 flex justify-between">
                      <span>{item.act}</span>
                      <span>{item.time}</span>
                    </div>
                  ))}
                  {event.schedule.length > 3 && (
                    <p className="text-sm text-gray-500">+{event.schedule.length - 3} more...</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setEditingEvent(event)}
                    className="flex-1"
                  >
                    Edit
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDeleteEvent(event.id)}
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {events.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg text-gray-600 mb-2">No events yet</h3>
            <p className="text-gray-500 mb-4">Create your first event to get started</p>
            <Button onClick={() => setIsCreatingEvent(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Create Event
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}