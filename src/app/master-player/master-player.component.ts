import { Component, OnInit } from "@angular/core";
import { VgAPI, VgStates } from 'videogular2/core';
import { IPlayable } from 'videogular2/src/core/vg-media/i-playable';

export interface ICamera {
    id: number;
    source: string;
    name: string;
    twitter: string;
}

@Component({
    selector: 'app-master-player',
    templateUrl: './master-player.component.html',
    styleUrls: [ './master-player.component.css' ]
})
export class MasterPlayerComponent {
    masterVideo: string = 'http://assets14.ign.com/videos/zencoder/2015/8/14/640/d9de372f3d373d06d4e770e73af44cb1-500000-1439510486-w.mp4';

    selectedCamera: ICamera = { id: null } as ICamera;
    cameras: Array<ICamera> = [
        {id: 0, source: 'http://assets14.ign.com/videos/zencoder/2015/7/31/640/8c76aa8849fb90f8dea93510dbb3a081-500000-1438352368-w.mp4', name: 'Max Scoville', twitter: '@MaxScoville'},
        {id: 1, source: 'http://assets14.ign.com/videos/zencoder/2015/10/5/640/e510ec7503270e3d2fb8956f5457a583-500000-1444082732-w.mp4', name: 'Mitch Dyer', twitter: '@MitchyD'},
        {id: 2, source: 'http://assets14.ign.com/videos/zencoder/2016/10/19/640/7fbd4dff4a907e2bb94b92c3372d6e40-500000-1476921194-w.mp4', name: 'Naomi Kyle', twitter: '@NaomiKyle'},
        {id: 3, source: 'http://assets14.ign.com/videos/zencoder/2015/8/14/640/3494db07bf4565c213110558c22da978-500000-1439510425-w.mp4', name: 'Ryan Maccaffrey', twitter: '@DMC_Ryan'}
    ];

    media: IPlayable;

    constructor() {}

    onPlayerReady(api: VgAPI) {
        this.media = api.getDefaultMedia();
    }

    onSelectCamera(index: number) {
        if (index >= 0) {
            this.selectedCamera = this.cameras[index];
        } else {
            this.selectedCamera = { id: null } as ICamera;
        }
    }
}
