import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

interface LoginFormProps {
  onLogin: (userType: 'organizer' | 'attendee', name: string) => void;
}

export function LoginForm({ onLogin }: LoginFormProps) {
  const [name, setName] = useState('');
  const [userType, setUserType] = useState<'organizer' | 'attendee'>('attendee');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onLogin(userType, name.trim());
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>EventFlow</CardTitle>
          <CardDescription>
            Streamline your event management
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div className="space-y-3">
              <Label>I'm joining as:</Label>
              <RadioGroup value={userType} onValueChange={(value) => setUserType(value as 'organizer' | 'attendee')}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="attendee" id="attendee" />
                  <Label htmlFor="attendee">Attendee - I want to see event schedules</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="organizer" id="organizer" />
                  <Label htmlFor="organizer">Organizer - I want to manage events</Label>
                </div>
              </RadioGroup>
            </div>

            <Button type="submit" className="w-full">
              Get Started
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}