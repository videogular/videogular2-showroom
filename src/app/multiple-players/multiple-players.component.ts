import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-multiple-players',
    templateUrl: './multiple-players.component.html',
    styleUrls: [ './multiple-players.component.css' ]
})
export class MultiplePlayersComponent implements OnInit {
    sources = [
        {
            src: "http://static.videogular.com/assets/videos/videogular.mp4",
            type: "video/mp4"
        },
        {
            src: "http://static.videogular.com/assets/videos/videogular.ogg",
            type: "video/ogg"
        },
        {
            src: "http://static.videogular.com/assets/videos/videogular.webm",
            type: "video/webm"
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

}
