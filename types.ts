export interface MenuItem {
  icon: any; 
  label: string;
  hasArrow?: boolean;
  color?: string;
}

export interface CalendarDay {
  day: number | string;
  isCurrentMonth: boolean;
  isToday?: boolean;
  hasTask?: boolean;
}