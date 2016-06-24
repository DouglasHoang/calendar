import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import {NgClass} from '@angular/common';


interface Day {
    year: number;
    month: number;          // 0-11 months
    dayName: number;        // 0-6 days
    date: number;
    hide: boolean;           // day number
    appointment?: string
}
// Creates an array of object for each day
export class DayService {
    date: Day[] = [];
    year: number;
    month: number;
    extraDays: number;
    daysInMonth: number;
    firstDayMonth: number;
    dateObj:Date;

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
                this.date.push({
                    year: this.year,
                    month: this.dateObj.getMonth(),
                    dayName: this.dateObj.getDay(),
                    date: this.dateObj.getDate(),
                    hide: (j >= 1 && j <= this.daysInMonth ? false : true)
                })
            }
            return this.date;
    }

}

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


@Component({
    selector: 'my-calendar',
    templateUrl: 'app/html/calendar.component.html',
    styleUrls: ['app/css/calendar.component.css'],
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
    title: 'Calendar';
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

    firstDayOfM = new Date(this.currentYear, this.currentMonth, 1);
    numberDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    calendar = new DayService(this.currentMonth ,this.currentYear).getCalendar();
    displayCalendar = new DisplayCalendar(this.calendar).getRows();
    

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
