import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-google-ima-player',
    templateUrl: './google-ima-player.component.html',
    styleUrls: [ './google-ima-player.component.css' ]
})
export class GoogleImaPlayerComponent implements OnInit {
    sources: Array<Object>;

    constructor() {
        this.sources = [
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
    }

    ngOnInit() {
    }
}
