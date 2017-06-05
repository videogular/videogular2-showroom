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
        { label: 'DASH: Multi rate Streaming', source: 'https://s3.amazonaws.com/_bc_dml/example-content/sintel_dash/sintel_vod.mpd' },
        { label: 'DASH: Live Streaming', source: 'https://24x7dash-i.akamaihd.net/dash/live/900080/dash-demo/dash.mpd' },
        { label: 'HLS: Streaming', source: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8' }
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
