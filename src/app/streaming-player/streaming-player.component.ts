import { Component, OnInit } from "@angular/core";
import { VgAPI } from 'videogular2/core';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Subscription } from 'rxjs';

export interface IMediaStream {
    source:string;
    label:string;
}

@Component({
    selector: 'app-streaming-player',
    templateUrl: './streaming-player.component.html',
    styleUrls: [ './streaming-player.component.css' ]
})
export class StreamingPlayerComponent implements OnInit {
    currentStream: string;
    api: VgAPI;

    streams:IMediaStream[] = [
        { label: 'VOD', source: 'http://static.videogular.com/assets/videos/videogular.mp4' },
        { label: 'DASH: Multi rate Streaming', source: 'https://dash.edgesuite.net/dash264/TestCases/2a/qualcomm/1/MultiResMPEG2.mpd' },
        { label: 'DASH: Live Streaming', source: 'https://vm2.dashif.org/livesim/testpic_6s/Manifest.mpd' },
        { label: 'HLS: Streaming', source: 'http://www.streambox.fr/playlists/x36xhzz/x36xhzz.m3u8' }
    ];

    constructor() {
    }

    onPlayerReady(api:VgAPI) {
        this.api = api;
    }

    ngOnInit() {
        this.currentStream = this.streams[0].source;
    }

    onClickStream(stream:IMediaStream) {
        this.api.pause();

        let timer:Subscription = TimerObservable.create(0, 10).subscribe(
            () => {
                this.currentStream = stream.source;
                timer.unsubscribe();
            }
        );
    }
}
