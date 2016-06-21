import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'my-pricing',
    templateUrl: 'app/html/pricing.component.html',
    styleUrls: ['app/css/pricing.component.css'],
    directives: [
        MD_CARD_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        MD_INPUT_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES,
        MD_SIDENAV_DIRECTIVES,
        MD_GRID_LIST_DIRECTIVES,
        ROUTER_DIRECTIVES        
    ],
})

export class PricingComponent {
    title: "Pricing";
}
