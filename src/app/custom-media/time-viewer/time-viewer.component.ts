import { Component, OnInit, ElementRef, Input, SimpleChanges } from '@angular/core';
import { IPlayable, IMediaSubscriptions } from 'videogular2/src/core/vg-media/i-playable';
import { VgStates, VgEvents } from 'videogular2/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

@Component({
    selector: 'app-time-viewer',
    templateUrl: './time-viewer.component.html',
    styleUrls: [ './time-viewer.component.css' ]
})
export class TimeViewerComponent implements OnInit, IPlayable {
    id: string;
    elem: any;
    time: any = { current: 0, total: 0, left: 0 };
    buffer: any = { end: 0 };
    buffered: any = { length: 1, end: end => 0 };
    canPlay: boolean = false;
    canPlayThrough: boolean = false;
    isMetadataLoaded: boolean = false;
    isWaiting: boolean = false;
    isCompleted: boolean = false;
    isLive: boolean = false;
    state: string = VgStates.VG_PAUSED;
    subscriptions: IMediaSubscriptions;
    textTracks: TextTrack[] = [];

    @Input()
    duration: number;

    timer: Observable<number>;
    timerSubs: Subscription;

    constructor(private ref: ElementRef) {
        this.elem = ref.nativeElement;
        this.id = this.elem.id;
    }

    ngOnInit() {
        this.timer = TimerObservable.create(0, 10);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['duration'].currentValue) {
            if (this.timerSubs) {
                this.pause();
            }

            this.duration = changes['duration'].currentValue;
            this.time.current = 0;
            this.time.total = this.duration;
            this.buffer.end = this.duration;
            this.buffered.end = end => this.duration;

            this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_LOADED_METADATA));
            this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_CAN_PLAY));
            this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_CAN_PLAY_THROUGH));
        }
    }

    play() {
        this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_PLAY));
        this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_PLAYING));

        this.timerSubs = this.timer.subscribe(
            () => {
                this.time.current += 0.01;
                this.currentTime = this.time.current;
                this.state = VgStates.VG_PLAYING;

                this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_TIME_UPDATE));

                if (this.time.current >= this.time.total) {
                    this.time.current = 0;
                    this.currentTime = 0;
                    this.state = VgStates.VG_ENDED;
                    this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_ENDED));
                    this.timerSubs.unsubscribe();
                }
            }
        );
    }

    seekTime(value:number, byPercent:boolean = false) {
        let second:number;
        let duration:number = this.time.total;

        if (byPercent) {
            second = value * duration / 100;
        }
        else {
            second = value;
        }

        this.time.current = second;
        this.currentTime = second;
    }

    set currentTime(seconds) {
        this.time.current = seconds;
        this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_TIME_UPDATE));
    }

    get currentTime() {
        return this.time.current;
    }

    pause() {
        this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_PAUSE));
        this.timerSubs.unsubscribe();
        this.state = VgStates.VG_PAUSED;
    }
}
