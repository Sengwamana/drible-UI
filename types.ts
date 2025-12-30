export interface Task {
  id: string;
  title: string;
  time: string;
  completed: boolean;
  type: 'interview' | 'meeting' | 'update' | 'goals' | 'policy';
}

export interface Meeting {
  id: string;
  title: string;
  subtitle?: string;
  startTime: string; // HH:mm
  duration: number; // minutes
  attendees: string[]; // URLs
  day: number; // Day of month
  color: 'black' | 'white';
}

export interface DaySchedule {
  dayName: string;
  dayNumber: number;
}

export interface Stat {
  label: string;
  value: string | number;
  subValue?: string;
  trend?: 'up' | 'down' | 'neutral';
}
