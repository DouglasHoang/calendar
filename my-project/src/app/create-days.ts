import { Injectable } from '@angular/core';
import { AppointmentService } from './appointment.service';
import { Appointment } from './appointment';

export class DayProto {
    name: number; // 0-6;
    date: number;
    hide: boolean; // hide days that are not in the month
    today: boolean;
    isPreviousDay: boolean;
    appointments: Appointment[];
}

export class DayServiceProto {

    date: DayProto[] = [];
    year: number;
    month: number;
    extraDays: number;
    daysInMonth: number;
    firstDayMonth: number;
    dateObj:Date;
    currentDate = new Date();
    index: number = 0;
    isPreviousDay: boolean;

    appointments = new AppointmentService("9:00", "18:00");


    constructor(month , year) {
        this.month = month;
        this.year = year;
    }

//  Fills an array with day objects
    getCalendar() {
            this.daysInMonth = new Date(this.year, this.month + 1, 0).getDate();
            this.firstDayMonth = new Date(this.year, this.month, 1).getDay();
            this.extraDays = 42 - this.daysInMonth - this.firstDayMonth;

            for ( let j = (1 - this.firstDayMonth); j <= (this.daysInMonth + this.extraDays); j++ ) {
                this.dateObj = new Date(this.year, this.month, j);
                if (this.currentDate.getFullYear() == this.dateObj.getFullYear()) {
                    if (this.currentDate.getMonth() == this.dateObj.getMonth()) {
                        if (this.currentDate.getDate() > this.dateObj.getDate()) {
                            this.isPreviousDay = true;
                        }
                        else {
                            this.isPreviousDay = false;
                        }
                    }
                    else if (this.currentDate.getMonth() < this.dateObj.getMonth()) {
                        this.isPreviousDay = false;
                    }
                    else if (this.currentDate.getMonth() > this.dateObj.getMonth()) {
                        this.isPreviousDay = true;
                    }
                }
                else if (this.currentDate.getFullYear() > this.dateObj.getFullYear()) {
                    this.isPreviousDay = true;
                }
                else if (this.currentDate.getFullYear() < this.dateObj.getFullYear()) {
                    this.isPreviousDay = false;
                }




                this.date.push({
                    name: this.dateObj.getDay(),
                    date: this.dateObj.getDate(),
                    hide: (j >= 1 && j <= this.daysInMonth ? false : true),
                    today: (this.currentDate.getDate() == this.dateObj.getDate() && this.currentDate.getMonth() == this.dateObj.getMonth() && this.currentDate.getFullYear() == this.dateObj.getFullYear() ? true : false),
                    isPreviousDay: this.isPreviousDay,
                    appointments: new AppointmentService("9:00", "18:00").createAppointments()
                })

                this.index += 1;
            }
            return this.date;
    }


}