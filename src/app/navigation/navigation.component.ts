import { Component } from '@angular/core';
import { NavigationItem } from '../../interfaces/navigationItem';

import { RoomService } from './../../services/room.service';
import { Room } from '../../interfaces/room';
import { map, take } from 'rxjs/operators';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {

    // declare an array of navigation items that will hold our rooms
    public navArr: NavigationItem[] = [{
        title: 'Welcome',
        link: 'welcome'
    },
    {
        title: 'About',
        link: 'about'
    }];

    // inject the service
    constructor( private _roomService: RoomService ) {

        // Now that our data from the service is an observable, we need to handle our data differently
        // we will now wrap our transformation inside an rxjs/map which will itself be inside a .pipe
        this._roomService.rooms.pipe( // start our .pipe here
            // our array.map goes INSIDE our rxjs/map
            // also note that because I am not using {} on the arrow function for my rxjs/map, it is
            // implictly returning the result
            map( (roomList: Room[]) => roomList.map( (eachRoom: Room) => {
                    return { // return a new navitem
                        title: eachRoom.title,
                        link: 'room/' + eachRoom.id
                    };
                })
            ), // don't forget to add the comma since we're adding a .take
            take(1) // take(1) makes the subscription emit once and ONLY once
        ).subscribe( (roomsAsNavItem: NavigationItem[]) => {
            // now we can subscribe to our new list of nav items. the combining of two arrays now goes here
            for (const navItem of roomsAsNavItem) {
                this.navArr.push(navItem); // add each iteration of our new array we created to the old one
            }
        });


    }
}
