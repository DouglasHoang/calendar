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
import { DisplayCalendar } from './display.calendar';
import { TimePipe } from './time-pipe';
import { AppointmentService } from './appointment.service';


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

    technicians = ["Doug", "Bob", "Billy"];
    services = ["Nails", "Spa", "Massage"];

    dateObj = new Date();
    currentDay = this.dateObj.getDay();
    currentYear = this.dateObj.getFullYear();
    currentDate = this.dateObj.getDate();
    currentMonth = this.dateObj.getMonth();
    date: number; 

    displayLightBox: boolean = false;
    dayNumber: number;
    appointments: Appointment[];

    firstDayOfM = new Date(this.currentYear, this.currentMonth, 1);
    numberDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    calendar = new DayService(this.currentMonth ,this.currentYear).getCalendar();
    displayCalendar = new DisplayCalendar(this.calendar).getRows();

    numberOfAppointments = 300 / this.calendar[0].appointments.length;
    width = this.numberOfAppointments + "%";
    
    getLightBox(data) {
        if (data.previousdays == false) {
            this.displayLightBox = true;
            this.date = data.date;
            this.dayNumber = data.dayName;
            this.appointments = data.appointments;
        }


    }

    exitLightBox() {
        this.displayLightBox = false;
    }
    
    getAppointment(appointment) {
        appointment.description = false;
    }

    getLastMonth() {
        if ( this.currentMonth == 0 ) {
            this.currentMonth = 11;
            this.currentYear--;
        }
        this.currentMonth--;
        this.numberDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        this.calendar = new DayService(this.currentMonth, this.currentYear).getCalendar();
        this.displayCalendar = new DisplayCalendar(this.calendar).getRows();

    }

    getNextMonth() {
        this.currentMonth++;
        if ( this.currentMonth == 12) {
            this.currentMonth = 0;
            this.currentYear++;
        }
        this.numberDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        this.calendar = new DayService(this.currentMonth, this.currentYear).getCalendar();
        this.displayCalendar = new DisplayCalendar(this.calendar).getRows();
    }

    getToday() {
        this.currentYear = this.dateObj.getFullYear();
        this.currentMonth = this.dateObj.getMonth();
        this.numberDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        this.calendar = new DayService(this.currentMonth, this.currentYear).getCalendar();
        this.displayCalendar = new DisplayCalendar(this.calendar).getRows();
    }


}