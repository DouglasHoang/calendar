import { Appointment } from './appointment'

export interface Day {
    id: number;
    year: number;
    month: number;          // 0-11 months
    dayName: number;        // 0-6 days
    date: number;
    hide?: boolean;           // day number
    today?: boolean;         // is it today?
    previousdays?: boolean;
    appointments?: Appointment[];
}