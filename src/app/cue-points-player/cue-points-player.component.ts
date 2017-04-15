import { Component, OnInit } from "@angular/core";

export interface ICuePoint {
    title: string;
    description: string;
    src: string;
    href: string;
}

@Component({
    selector: 'app-cue-points-player',
    templateUrl: './cue-points-player.component.html',
    styleUrls: [ './cue-points-player.component.css' ]
})
export class CuePointsPlayerComponent implements OnInit {
    sources: Array<Object>;
    cuePointData: ICuePoint = null;

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

    onEnterCuePoint($event) {
        this.cuePointData = JSON.parse($event.text);
    }

    onExitCuePoint($event) {
        this.cuePointData = null;
    }
}
