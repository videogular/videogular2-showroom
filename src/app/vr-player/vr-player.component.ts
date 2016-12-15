import { Component, OnInit, ElementRef } from "@angular/core";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { VgAPI } from "videogular2/core";

export interface IAframeEntity {
    id: string;
    position: string;
    rotation: string;
}
export interface IVrDoor extends IAframeEntity {
    goto: string;
}
export interface IVrText extends IAframeEntity {
    text: string;
    scale: string;
    opaAnim: string;
    posAnim: string;
}
export interface IVrTextPlane extends IAframeEntity {
    position: string;
    rotation: string;
    target: string;
    width: number;
    height: number;
    isShown: boolean;
}
export interface IVideo {
    id: string;
    url: string;
    track: string;
    doors: Array<IVrDoor>;
    texts: Array<IVrText>;
    textPlanes: Array<IVrTextPlane>;
}

@Component({
    selector: 'app-vr-player',
    templateUrl: './vr-player.component.html',
    styleUrls: [ './vr-player.component.css' ]
})
export class VrPlayerComponent implements OnInit {

    elem: any;
    aframe: any;
    cuePointData: any = {};
    hideTitle: boolean = true;
    currentVideo: IVideo;
    timeout: any;
    vgApi: VgAPI;
    videos: Array<IVideo> = [
        {
            id: 'v0',
            url: 'http://static.videogular.com/assets/videos/vr-route-0.mp4',
            track: 'http://static.videogular.com/assets/data/stage-1.vtt',
            doors: [
                { id: 'd1', position: '-3 2 -10', rotation: '0 0 0', goto: 'v1' }
            ],
            texts: [],
            textPlanes: []
        },
        {
            id: 'v1',
            url: 'http://static.videogular.com/assets/videos/vr-route-1.mp4',
            track: 'http://static.videogular.com/assets/data/stage-2.vtt',
            doors: [
                { id: 'd1', position: '-15 -3 -18', rotation: '0 -180 0', goto: 'v0' },
                { id: 'd2', position: '8 1 9', rotation: '0 -130 0', goto: 'v2' }
            ],
            texts: [
                {
                    id: 't1',
                    text: 'St. Maurici lake',
                    position: '6 0 -4',
                    rotation: '0 -30 0',
                    scale: '2 2 2',
                    opaAnim: 'startEvents: t1; property: opacity; dur: 300; from: 0; to: 1; elasticity: 1000',
                    posAnim: 'startEvents: t1; property: position; dur: 500; from: 6 0 -4; to: 6 0.3 -4; elasticity: 1000'
                }
            ],
            textPlanes: [
                {
                    id: 'p1',
                    position: '17 0 -7',
                    rotation: '-90 -30 0',
                    width: 20,
                    height: 20,
                    target: 't1',
                    isShown: false
                }
            ]
        },
        {
            id: 'v2',
            url: 'http://static.videogular.com/assets/videos/vr-route-2.mp4',
            track: 'http://static.videogular.com/assets/data/stage-3.vtt',
            doors: [
                { id: 'd1', position: '-1 1 -8', rotation: '0 -30 0', goto: 'v1' },
                { id: 'd2', position: '0 2 7', rotation: '0 180 0', goto: 'v3' }
            ],
            texts: [],
            textPlanes: []
        },
        {
            id: 'v3',
            url: 'http://static.videogular.com/assets/videos/vr-route-3.mp4',
            track: 'http://static.videogular.com/assets/data/stage-4.vtt',
            doors: [
                { id: 'd1', position: '-5 2 7', rotation: '0 130 0', goto: 'v2' },
                { id: 'd2', position: '3 4 7', rotation: '0 210 0', goto: 'v4' }
            ],
            texts: [],
            textPlanes: []
        },
        {
            id: 'v4',
            url: 'http://static.videogular.com/assets/videos/vr-route-4.mp4',
            track: 'http://static.videogular.com/assets/data/stage-5.vtt',
            doors: [
                { id: 'd1', position: '2 1 10', rotation: '0 180 0', goto: 'v3' },
                { id: 'd2', position: '3 2 -10', rotation: '0 180 0', goto: 'v0' }
            ],
            texts: [
                {
                    id: 't1',
                    text: 'Ratera lake',
                    position: '9 0 -7',
                    rotation: '0 -90 0',
                    scale: '2 2 2',
                    opaAnim: 'startEvents: t1; property: opacity; dur: 300; from: 0; to: 1; elasticity: 1000',
                    posAnim: 'startEvents: t1; property: position; dur: 500; from: 9 0 -7; to: 9 0.6 -7; elasticity: 1000'
                }
            ],
            textPlanes: [
                {
                    id: 'p1',
                    position: '17 0 -7',
                    rotation: '-90 0 0',
                    width: 20,
                    height: 40,
                    target: 't1',
                    isShown: false
                }
            ]
        }
    ];

    constructor(ref: ElementRef) {
        this.elem = ref.nativeElement;
        this.currentVideo = this.videos[ 0 ];
    }

    ngOnInit() {
        this.aframe = this.elem.querySelector('a-scene');
    }

    onAframeRenderStart() {
        const media = this.vgApi.getDefaultMedia();
        if (media.isMetadataLoaded) {
            this.displayDoors();
        }
    }

    onPlayerReady(api: VgAPI) {
        this.vgApi = api;
        const media = api.getDefaultMedia();
        if (media.isMetadataLoaded) {
            this.displayDoors();
        }
        media.subscriptions.loadedMetadata.subscribe(this.displayDoors.bind(this));
    }

    displayDoors() {
        Array.from(document.querySelectorAll('a-image'))
            .forEach(item => item.dispatchEvent(new CustomEvent('vgStartFadeInAnimation')));
    }

    onMouseEnterPlane(plane: IVrTextPlane) {
        if (!plane.isShown) {
            let target = document.querySelector('#' + plane.target);
            target.dispatchEvent(new CustomEvent(plane.target));
            plane.isShown = true;
        }
    }

    onMouseEnter($event: any, door: IVrDoor) {
        $event.target.dispatchEvent(new CustomEvent('vgStartAnimation'));

        this.timeout = TimerObservable.create(2000).subscribe(
            () => {
                this.currentVideo = this.videos.filter(v => v.id === door.goto)[ 0 ];
            }
        );
    }

    onMouseLeave($event: any) {
        $event.target.dispatchEvent(new CustomEvent('vgPauseAnimation'));

        // Send start and pause again to reset the scale and opacity
        $event.target.dispatchEvent(new CustomEvent('vgStartAnimation'));
        $event.target.dispatchEvent(new CustomEvent('vgPauseAnimation'));

        this.timeout.unsubscribe();
    }

    onEnterCuePoint($event: any) {
        this.hideTitle = false;
        this.cuePointData = JSON.parse($event.text);
    }

    onExitCuePoint($event: any) {
        this.hideTitle = true;

        // wait transition
        TimerObservable.create(500).subscribe(
            () => {
                this.cuePointData = {};
            }
        );
    }

    ngOnDestroy() {
        this.timeout.unsubscribe();
    }
}
