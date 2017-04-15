import { Component } from '@angular/core';
import { VgAPI } from 'videogular2/core';

export interface IMedia {
    title: string;
    src: string;
    type: string;
}

@Component({
    selector: 'app-smart-playlist',
    templateUrl: './smart-playlist.component.html',
    styleUrls: [ './smart-playlist.component.css' ]
})
export class SmartPlaylistComponent {
    playlist: Array<IMedia> = [
        {
            title: 'Pale Blue Dot',
            src: 'http://static.videogular.com/assets/videos/videogular.mp4',
            type: 'video/mp4'
        },
        {
            title: 'Big Buck Bunny',
            src: 'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
            type: 'video/mp4'
        },
        {
            title: 'Elephants Dream',
            src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
            type: 'video/mp4'
        }
    ];

    currentIndex = 0;
    currentItem: IMedia = this.playlist[ this.currentIndex ];
    api: VgAPI;

    constructor() {
    }

    onPlayerReady(api: VgAPI) {
        this.api = api;

        this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
        this.api.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
    }

    nextVideo() {
        this.currentIndex++;

        if (this.currentIndex === this.playlist.length) {
            this.currentIndex = 0;
        }

        this.currentItem = this.playlist[ this.currentIndex ];
    }

    playVideo() {
        this.api.play();
    }

    onClickPlaylistItem(item: IMedia, index: number) {
        this.currentIndex = index;
        this.currentItem = item;
    }
}
