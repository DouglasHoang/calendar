import { Day } from './day';

export class DisplayCalendar {
    date: Day[];
    row = [];
    constructor(date) {
       this.date = date;
    }

    getRows() {
        for (let i = 0; i < 6; i++) {
           this.row[i] = this.date.slice(i * 7, 7 * (i + 1))
       }
       return this.row;
    }
}