import { Component, OnInit } from "@angular/core";

interface Stream {
    source:string;
    label:string;
}

@Component({
    selector: 'app-streaming-player',
    templateUrl: './streaming-player.component.html',
    styleUrls: [ './streaming-player.component.css' ]
})
export class StreamingPlayerComponent implements OnInit {
    currentStream:Stream;

    streams:Stream[] = [
        { label: 'VOD', source: 'http://static.videogular.com/assets/videos/videogular.mp4' },
        { label: 'Multi rate Streaming', source: 'http://dash.edgesuite.net/dash264/TestCases/2a/qualcomm/1/MultiResMPEG2.mpd' },
        { label: 'Live Streaming', source: 'http://vm2.dashif.org/livesim/testpic_6s/Manifest.mpd' }
    ];

    constructor() {
    }

    ngOnInit() {
        this.currentStream = this.streams[0];
    }

    onClickStream(stream:Stream) {
        this.currentStream = stream;
    }
}