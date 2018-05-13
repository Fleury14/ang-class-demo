import { NgModule } from '@angular/core';
import { RoomService } from '../../services/room.service';

import { RoomRoutingModule, routingComponents } from './room.routing.module';

@NgModule ({
    declarations: [ routingComponents ],
    imports: [ RoomRoutingModule ],
    providers: [ RoomService ]
})

export class RoomModule {}
