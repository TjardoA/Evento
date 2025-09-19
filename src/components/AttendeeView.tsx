import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar, MapPin, Clock, Search, Music } from 'lucide-react';

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

interface AttendeeViewProps {
  userName: string;
  onLogout: () => void;
}

export function AttendeeView({ userName, onLogout }: AttendeeViewProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [events] = useState<Event[]>([
    {
      id: '1',
      title: 'Summer Music Festival',
      date: '2024-07-15',
      location: 'Central Park',
      schedule: [
        { id: '1', act: 'The Cosmic Rays', time: '14:00', stage: 'Main Stage' },
        { id: '2', act: 'Luna Moths', time: '15:30', stage: 'Side Stage' },
        { id: '3', act: 'Electric Dreams', time: '17:00', stage: 'Main Stage' },
        { id: '4', act: 'Neon Nights', time: '19:00', stage: 'Main Stage' },
        { id: '5', act: 'Stellar Beats', time: '18:30', stage: 'Side Stage' },
      ]
    },
    {
      id: '2',
      title: 'Tech Conference 2024',
      date: '2024-08-22',
      location: 'Convention Center',
      schedule: [
        { id: '6', act: 'AI in the Future', time: '09:00', stage: 'Hall A' },
        { id: '7', act: 'Startup Pitch Session', time: '11:00', stage: 'Hall B' },
        { id: '8', act: 'Web3 Revolution', time: '14:00', stage: 'Hall A' },
        { id: '9', act: 'Networking Lunch', time: '12:00', stage: 'Main Hall' },
      ]
    },
    {
      id: '3',
      title: 'Art & Design Expo',
      date: '2024-09-10',
      location: 'Gallery District',
      schedule: [
        { id: '10', act: 'Digital Art Showcase', time: '10:00', stage: 'Gallery 1' },
        { id: '11', act: 'UX Design Workshop', time: '14:00', stage: 'Workshop Room' },
        { id: '12', act: 'Artist Panel Discussion', time: '16:00', stage: 'Main Hall' },
      ]
    }
  ]);

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.schedule.some(item => 
      item.act.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.stage.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const upcomingEvents = filteredEvents.filter(event => new Date(event.date) >= new Date());
  const pastEvents = filteredEvents.filter(event => new Date(event.date) < new Date());

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const EventCard = ({ event }: { event: Event }) => {
    const sortedSchedule = [...event.schedule].sort((a, b) => a.time.localeCompare(b.time));
    
    return (
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            {event.title}
            <Badge variant={new Date(event.date) >= new Date() ? "default" : "secondary"}>
              {new Date(event.date) >= new Date() ? "Upcoming" : "Past"}
            </Badge>
          </CardTitle>
          <CardDescription className="space-y-1">
            <div className="flex items-center text-sm">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(event.date).toLocaleDateString('en-US', { 
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center text-sm">
              <MapPin className="w-4 h-4 mr-2" />
              {event.location}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <h4 className="flex items-center">
              <Music className="w-4 h-4 mr-2" />
              Schedule ({sortedSchedule.length} acts)
            </h4>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {sortedSchedule.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{item.act}</p>
                    <p className="text-sm text-gray-600 flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {item.stage}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {formatTime(item.time)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-xl">Hi {userName}! 👋</h1>
              <p className="text-gray-600 text-sm">Discover events and stay updated</p>
            </div>
            <Button variant="outline" onClick={onLogout} size="sm">
              Logout
            </Button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search events, acts, or venues..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="upcoming">
              Upcoming ({upcomingEvents.length})
            </TabsTrigger>
            <TabsTrigger value="past">
              Past Events ({pastEvents.length})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming">
            {upcomingEvents.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg text-gray-600 mb-2">
                  {searchTerm ? 'No events found' : 'No upcoming events'}
                </h3>
                <p className="text-gray-500">
                  {searchTerm ? 'Try adjusting your search terms' : 'Check back later for new events'}
                </p>
              </div>
            ) : (
              <div>
                {upcomingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="past">
            {pastEvents.length === 0 ? (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg text-gray-600 mb-2">No past events</h3>
                <p className="text-gray-500">Past events will appear here</p>
              </div>
            ) : (
              <div>
                {pastEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}