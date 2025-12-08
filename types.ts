export enum Tab {
  HOME = 'home',
  CALENDAR = 'calendar',
  MESSAGE = 'message',
  PROFILE = 'profile'
}

export interface MenuItem {
  icon: any; // Lucide icon component
  label: string;
  hasArrow?: boolean;
  color?: string; // For the icon color
}

export interface CalendarDay {
  day: number | string;
  isCurrentMonth: boolean;
  isToday?: boolean;
  hasTask?: boolean;
}