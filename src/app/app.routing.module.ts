import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
// import { RoomComponent } from './room/room.component';

const routes: Route[] = [{
    path: 'welcome',
    component: WelcomeComponent
  },
  // {
  //   path: 'room/:id',
  //   component: RoomComponent
  // },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent
  }];

@NgModule({
    declarations: [ ],
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }

// We removed Room Component here
export const routingComponents = [ WelcomeComponent, AboutComponent, ErrorComponent ];
