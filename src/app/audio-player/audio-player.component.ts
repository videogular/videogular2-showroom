import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-audio-player',
    templateUrl: './audio-player.component.html',
    styleUrls: [ './audio-player.component.css' ]
})
export class AudioPlayerComponent implements OnInit {
    sources: Array<Object>;

    constructor() {
        this.sources = [
            {
                src: "http://static.videogular.com/assets/audios/videogular.mp3",
                type: "audio/mp3"
            }
        ];
    }

    ngOnInit() {
    }
}
