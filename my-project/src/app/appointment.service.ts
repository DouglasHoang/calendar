import { Appointment } from './appointment';
import { Injectable } from '@angular/core'
import { Day } from './day';
import { Technicians } from './mock-tech';

@Injectable()

export class AppointmentService {
    appointment: Appointment[] = [];
    openTime: string; // in military time
    closeTime: string; // in military time
    time: string;
    description: string = "";
    i: number = 0;
    constructor(openTime, closeTime) {
        this.openTime = openTime;
        this.closeTime = closeTime;
    }

    openTimeArray;
    closeTimeArray;
    gapInMinutes:number;
    startTimeInMinutes: number;
    closeTimeInMinutes: number;


    createAppointments() {
        this.openTimeArray = this.openTime.split(":");
        this.closeTimeArray = this.closeTime.split(":");

        this.openTimeArray[0] = Number(this.openTimeArray[0]);
        this.openTimeArray[1] = Number(this.openTimeArray[1]);
        
        this.closeTimeArray[0] = Number(this.closeTimeArray[0]);
        this.closeTimeArray[1] = Number(this.closeTimeArray[1]);

        this.gapInMinutes = (this.closeTimeArray[0] - this.openTimeArray[0]) * 60;
        this.gapInMinutes += this.closeTimeArray[1] - this.openTimeArray[1];
        this.startTimeInMinutes = this.openTimeArray[0] * 60 + this.openTimeArray[1];
        this.closeTimeInMinutes = this.closeTimeArray[0] * 60 + this.closeTimeArray[1];


        for (let x = this.startTimeInMinutes; x < this.closeTimeInMinutes; x += 15) {
            if (x % 60 == 0) {
                this.time = Math.floor(x/60) + ":00";
            }
            else {
                this.time = Math.floor(x/60) + ":" + x % 60;
            }
            this.appointment.push({
                id: this.i,
                time: this.time,
                available: [{name:"Douglas", isAvailable: true}, {name:"Davis", isAvailable: true}]
                });
            this.i += 1;
        }
        return this.appointment;
    }

}
