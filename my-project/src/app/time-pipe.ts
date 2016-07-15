import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "time"
})
// Uses military time but converts it to standard AM - PM
export class TimePipe {
    transform(val) {
        let a = val.split(":");
        let b = "" // determines if it's AM or PM
        if ( a[0] >= 0 && a[0] <= 23 ) {
            if (a[0] >= 0 && a[0] < 12) {
                b = "A.M.";
                if (a[0] == 0) {
                    a[0] = 12;
                }
            }
            else if (a[0] >= 12 && a[0] <= 23) {
                b = "P.M."
                if (a[0] != 12) {
                    a[0] -= 12;
                }
            }

            if (a[0] > 0 && a[0] < 10) {
                return '\xA0'+ '\xA0' + a[0] + ":" + a[1] + " " + b;
            }
            else {
                return a[0] + ":" + a[1] + " " + b;
            }
        }
    }
}