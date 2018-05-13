import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { RoomComponent } from './room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomFormComponent } from './room-form/room-form.component';

const routes: Route[] = [{
    path: 'room/:id',
    component: RoomComponent,
    children: [{
        path: 'list',
        component: RoomListComponent
    },
    {
        path: 'form',
        component: RoomFormComponent
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    }]
}];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class RoomRoutingModule {}

export const routingComponents = [ RoomComponent, RoomListComponent, RoomFormComponent ];
