import { Appointment } from './appointment'

export class Day {
    year: number;
    month: number;          // 0-11 months
    dayName: number;        // 0-6 days
    date: number;
    hide: boolean;           // day number
    today: boolean;         // is it today?
    previousdays: boolean;
//    appointment: Appointment[];
}