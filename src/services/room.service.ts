import { Injectable } from '@angular/core';
import { Room } from '../interfaces/room';

import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/observable';

@Injectable()

export class RoomService {
    public rooms: Observable<Room[]>;

    constructor() {
        this.rooms = of([{
            id: '1',
            title: 'Donkey Kong',
            picture: 'donkey-kong.jpg'
        },
        {
            id: '2',
            title: 'Halo',
            picture: 'halo.jpg'
        },
        {
            id: '3',
            title: 'Zelda',
            picture: 'zelda.jpg'
        }]);
    }
}
