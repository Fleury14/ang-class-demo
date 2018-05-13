import { Component } from '@angular/core';
import { NavigationItem } from '../../interfaces/navigationItem';

import { RoomService } from './../../services/room.service';
import { Room } from '../../interfaces/room';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {

    // declare an array of navigation items that will hold our rooms
    public roomsAsNavItem: NavigationItem[];
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

        // since the rooms we are getting are of a type Room, if we want them to be in an array of Navigation items, we need to transform
        // our array into a format that fits our navigation array. I use array.map.
        this.roomsAsNavItem = this._roomService.rooms.map(roomItem => {
            // .map iterates through each room, creates an object that has our necessary navigation item fields (title, link), then returns
            const ourNewNavItem = {
                title: roomItem.title,
                link: 'room/' + roomItem.id // remember that the room info only contains the id. we want to navigate to /room/1, not just /1
            };
            return ourNewNavItem;
        }); // end result is that roomsAsNavItem is now an array of navigation items containing room info we got from the service

        // now we need to tack it on to our current array
        for (const navItem of this.roomsAsNavItem) { // remember for..of? We can use it here too!
            this.navArr.push(navItem); // add each iteration of our new array we created to the old one
        }
    }
}
