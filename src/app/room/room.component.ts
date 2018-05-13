import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators/map';

@Component({
    selector: 'app-room',
    templateUrl: './room.component.html',
    styleUrls: ['./room.component.css']
})

export class RoomComponent {
    public currentParam: any;

    constructor(private _route: ActivatedRoute) {
        this._route.paramMap
        .pipe(
            map(paramData => {
               const mapResult: string = paramData.get('id') + ' is the parameter we are on!';
               return mapResult;
            })
        )
        .subscribe(paramResponse => {
            console.log(paramResponse);
            this.currentParam = paramResponse;
        });
    }
 }
