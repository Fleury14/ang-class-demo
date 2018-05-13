import { Injectable } from '@angular/core';
import { Room } from '../interfaces/room';

@Injectable()

export class RoomService {
    public rooms: Room[];

    constructor() {
        this.rooms = [{
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
        }];
    }
}
