import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { HomeComponent } from './home.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { FeaturesComponent } from './features.component';
import { SignInComponent } from './sign-in.component';
import { TemplateComponent } from './template.component';
import { PricingComponent } from './pricing.component';
import { CalendarComponent } from './calendar.component';

@Component({
  moduleId: module.id,
  selector: 'my-project-app',
  template: `
  <router-outlet></router-outlet>
  `,
  styles: [`
    nav {
      box-sizing: border-box;
      position: absolute;
      top:0;
      left: 0;
      height: 50px;
      width: 100%;
      padding-top: 15px;
    }
    nav:hover {
      background-color: white;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.23);
    }
    a {
      margin: 0 20px;
    }
  `],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_GRID_LIST_DIRECTIVES,
    ROUTER_DIRECTIVES
    ],
  providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
  {
    path:'/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path:'features',
    name: 'Features',
    component: FeaturesComponent
  },
  {
    path:'pricing',
    name: 'Pricing',
    component: PricingComponent
  },
  {
    path:'template',
    name: 'Template',
    component: TemplateComponent
  },
  {
    path:'signin',
    name: 'SignIn',
    component: SignInComponent
  },
  {
    path:'calendar',
    name: 'Calendar',
    component: CalendarComponent
  }
])

export class MyProjectAppComponent {
  title: "MyProject";
}
