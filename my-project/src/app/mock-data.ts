import { Day } from './day';
import { AppointmentService } from './appointment.service';

export let MockData: Day[] = [];

var startYear = 2016;
var endYear = 2017;
var index = 0;

for (let i = 0; new Date(startYear, 0, i).getFullYear() != endYear; i++) {
    var date = new Date(startYear, 0, i);
    MockData.push({
        id: index,
        year: date.getFullYear(),
        month: date.getMonth(),
        dayName: date.getDay(),
        date: date.getDate(),
        appointments: new AppointmentService("9:00","18:00").createAppointments()
    });
    index += 1;
}