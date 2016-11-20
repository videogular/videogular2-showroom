import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-master-player',
    templateUrl: './master-player.component.html',
    styleUrls: [ './master-player.component.css' ]
})
export class MasterPlayerComponent implements OnInit {

    master: Array<Object>;
    slave: Array<Object>;

    constructor() {
        this.master = [
            {
                src: "http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov",
                type: "video/mp4"
            },
            {
                src: "http://static.videogular.com/assets/videos/big_buck_bunny_720p_stereo.ogg",
                type: "video/ogg"
            }
        ];

        this.slave = [
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
