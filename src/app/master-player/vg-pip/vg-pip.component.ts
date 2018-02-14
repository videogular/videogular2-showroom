import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICamera } from '../master-player.component';

@Component({
    selector: 'vg-pip',
    templateUrl: './vg-pip.component.html',
    styleUrls: [ './vg-pip.component.css' ]
})
export class VgPipComponent {
    @Input() camera: ICamera;

    @Output() onCloseCam: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    onClickCam() {
        this.onCloseCam.next();
    }
}
