import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {NgClass} from '@angular/common';
import { Appointment } from './appointment';
import { Day } from './day';
import { DayService } from './dayservice';
import { TimePipe } from './time-pipe';
import { AppointmentService } from './appointment.service';
import { MockData } from './mock-data';

@Component({
    selector: 'my-calendar',
    templateUrl: 'app/html/calendar.component.html',
    styleUrls: ['app/css/calendar.component.css'],
    pipes: [TimePipe],
    directives: [
        MD_CARD_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        MD_INPUT_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES,
        MD_SIDENAV_DIRECTIVES,
        MD_GRID_LIST_DIRECTIVES,
        ROUTER_DIRECTIVES,
        NgClass        
    ],
})

export class CalendarComponent {
    day = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
    ];
    month = ["January", "February", "March", "April",
    "May", "June", "July", "August", "September", "October",
    "November", "December"
    ];


    dateObj = new Date();
    currentDay = this.dateObj.getDay();
    currentYear = this.dateObj.getFullYear();
    currentDate = this.dateObj.getDate();
    currentMonth = this.dateObj.getMonth();
    date: number;
    id: number; 

    displayLightBox: boolean = false;
    dayNumber: number;
    appointments: Appointment[];

    firstDayOfM = new Date(this.currentYear, this.currentMonth, 1);
    numberDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    calendar = new DayService(this.currentMonth ,this.currentYear).getCalendar();


    numberOfAppointments = 300 / MockData[0].appointments.length;
    width = this.numberOfAppointments + "%";
    mockAppointment = MockData;

// Check Available appointments from the mock data
    startingIndex = this.getAppointmentsIndex();
    fill = this.fillCalendar();

    getAppointmentsIndex() {
        for (let i = 0; i < MockData.length; i++) {
            if (this.calendar[0].year == MockData[i].year && this.calendar[0].date == MockData[i].date && this.calendar[0].month == MockData[i].month) {
                return i;
            }
        }
    }

    fillCalendar() {
        for (let i = 0; i < 42; i++) {
            this.calendar[i].appointments = this.mockAppointment[i+this.startingIndex].appointments;
        }
        
    }

    getAppointment(appointment) {
        appointment.available[0].isAvailable = false;
    
    }
    
    getLightBox(data) {
        if (data.previousdays == false) {
            this.displayLightBox = true;
            this.date = data.date;
            this.dayNumber = data.dayName;
            this.appointments = data.appointments;
            this.id = data.id;
        }
    }


    exitLightBox() {
        this.displayLightBox = false;
    }
    

    getLastMonth() {
        if ( this.currentMonth == 0 ) {
            this.currentMonth = 11;
            this.currentYear--;
        }
        this.currentMonth--;
        this.numberDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        this.calendar = new DayService(this.currentMonth, this.currentYear).getCalendar();
        this.startingIndex = this.getAppointmentsIndex();
        this.fillCalendar();

    }

    getNextMonth() {
        this.currentMonth++;
        if ( this.currentMonth == 12) {
            this.currentMonth = 0;
            this.currentYear++;
        }
        this.numberDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        this.calendar = new DayService(this.currentMonth, this.currentYear).getCalendar();
        this.startingIndex = this.getAppointmentsIndex();
        this.fillCalendar();
    }

    getToday() {
        this.currentYear = this.dateObj.getFullYear();
        this.currentMonth = this.dateObj.getMonth();
        this.numberDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        this.calendar = new DayService(this.currentMonth, this.currentYear).getCalendar();
    }


}