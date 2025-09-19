import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { Plus, Trash2, ArrowLeft } from 'lucide-react';

interface ScheduleItem {
  id: string;
  act: string;
  time: string;
  stage: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  schedule: ScheduleItem[];
}

interface EventEditorProps {
  event?: Event | null;
  onSave: (eventData: Omit<Event, 'id'>) => void;
  onCancel: () => void;
}

export function EventEditor({ event, onSave, onCancel }: EventEditorProps) {
  const [title, setTitle] = useState(event?.title || '');
  const [date, setDate] = useState(event?.date || '');
  const [location, setLocation] = useState(event?.location || '');
  const [schedule, setSchedule] = useState<ScheduleItem[]>(
    event?.schedule || []
  );

  const addScheduleItem = () => {
    const newItem: ScheduleItem = {
      id: Date.now().toString(),
      act: '',
      time: '',
      stage: ''
    };
    setSchedule([...schedule, newItem]);
  };

  const updateScheduleItem = (id: string, field: keyof ScheduleItem, value: string) => {
    setSchedule(schedule.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const removeScheduleItem = (id: string) => {
    setSchedule(schedule.filter(item => item.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && date && location) {
      onSave({
        title,
        date,
        location,
        schedule: schedule.filter(item => item.act && item.time && item.stage)
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" onClick={onCancel}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <h1 className="text-2xl">
            {event ? 'Edit Event' : 'Create New Event'}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="title">Event Title</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter event title"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter event location"
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Schedule & Lineup</CardTitle>
                <Button type="button" onClick={addScheduleItem} variant="outline">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Act
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {schedule.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>No acts scheduled yet. Click "Add Act" to get started.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {schedule.map((item, index) => (
                    <div key={item.id}>
                      <div className="grid gap-4 md:grid-cols-4">
                        <div className="space-y-2">
                          <Label>Act/Speaker</Label>
                          <Input
                            value={item.act}
                            onChange={(e) => updateScheduleItem(item.id, 'act', e.target.value)}
                            placeholder="Enter act name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Time</Label>
                          <Input
                            type="time"
                            value={item.time}
                            onChange={(e) => updateScheduleItem(item.id, 'time', e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Stage/Room</Label>
                          <Input
                            value={item.stage}
                            onChange={(e) => updateScheduleItem(item.id, 'stage', e.target.value)}
                            placeholder="Enter stage/room"
                          />
                        </div>
                        <div className="flex items-end">
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => removeScheduleItem(item.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      {index < schedule.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit">
              {event ? 'Save Changes' : 'Create Event'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}