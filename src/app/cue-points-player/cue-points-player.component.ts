import { Component, OnInit } from '@angular/core';
import { VgAPI } from 'videogular2/core';
import { NgForm } from '@angular/forms';

declare var VTTCue;

export interface ICuePoint {
    id: string;
    title: string;
    description: string;
    src: string;
    href: string;
}

export interface IWikiCue {
    startTime: number;
    endTime: number;
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
    activeCuePoints: ICuePoint[] = [];
    api: VgAPI;
    track: TextTrack;
    showCuePointManager = false;
    newCue: IWikiCue = {
        startTime: 40,
        endTime: 50,
        title: 'Carl Sagan',
        description: 'Carl Edward Sagan (/ˈseɪɡən/; November 9, 1934 – December 20, 1996) was an American astronomer, cosmologist, astrophysicist, astrobiologist, author, science popularizer, and science communicator in astronomy and other natural sciences.',
        src: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Carl_Sagan_Planetary_Society.JPG',
        href: 'https://en.wikipedia.org/wiki/Carl_Sagan'
    };

    json: JSON = JSON;

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

    onPlayerReady(api: VgAPI) {
        this.api = api;
        this.track = this.api.textTracks[ 0 ];
    }

    onSubmit(form: NgForm, event: Event) {
        event.preventDefault();

        if (form.valid) {
            const jsonData = {
                title: form.value.title,
                description: form.value.description,
                src: form.value.src,
                href: form.value.href
            };

            const jsonText = JSON.stringify(jsonData);

            this.track.addCue(
                new VTTCue(form.value.startTime, form.value.endTime, jsonText)
            );
        }
    }

    onClickRemove(cue: TextTrackCue) {
        this.track.removeCue(cue);
    }

    onEnterCuePoint($event) {
        this.activeCuePoints.push({"id":$event.id, ...JSON.parse($event.text)});
    }

    onExitCuePoint($event) {
        this.activeCuePoints = this.activeCuePoints.filter(c => c.id!==$event.id);
    }
}
