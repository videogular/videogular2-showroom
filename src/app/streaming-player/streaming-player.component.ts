import { Component, OnInit } from "@angular/core";
import { VgAPI } from 'videogular2/core';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Subscription } from 'rxjs';
import { IDRMLicenseServer } from 'videogular2/streaming';

export interface IMediaStream {
    source: string;
    label: string;
    token?: string;
    licenseServers?: IDRMLicenseServer;
}

@Component({
    selector: 'app-streaming-player',
    templateUrl: './streaming-player.component.html',
    styleUrls: [ './streaming-player.component.css' ]
})
export class StreamingPlayerComponent implements OnInit {
    currentStream: IMediaStream;
    api: VgAPI;

    streams:IMediaStream[] = [
        { label: 'VOD', source: 'http://static.videogular.com/assets/videos/videogular.mp4' },
        { label: 'DASH: Multi rate Streaming', source: 'https://s3.amazonaws.com/_bc_dml/example-content/sintel_dash/sintel_vod.mpd' },
        { label: 'DASH: Live Streaming', source: 'https://24x7dash-i.akamaihd.net/dash/live/900080/dash-demo/dash.mpd' },
        {
            label: 'DASH: DRM with Widevine',
            source: 'https://storage.googleapis.com/shaka-demo-assets/angel-one-widevine/dash.mpd',
            licenseServers: {
                'com.widevine.alpha': {
                    serverURL: 'https://widevine-proxy.appspot.com/proxy'
                }
            }
        },
        {
            label: 'HLS: Streaming',
            source: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8'
        }
    ];

    constructor() {
    }

    onPlayerReady(api:VgAPI) {
        this.api = api;
    }

    ngOnInit() {
        this.currentStream = this.streams[0];
    }

    onClickStream(stream:IMediaStream) {
        this.api.pause();

        let timer:Subscription = TimerObservable.create(0, 10).subscribe(
            () => {
                this.currentStream = stream;
                timer.unsubscribe();
            }
        );
    }
}
