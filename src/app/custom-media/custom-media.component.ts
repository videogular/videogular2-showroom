import { Component } from '@angular/core';

@Component({
    selector: 'app-custom-media',
    templateUrl: './custom-media.component.html',
    styleUrls: [ './custom-media.component.css' ]
})
export class CustomMediaComponent {
    durations: number[] = [ 5, 10, 20 ];
    duration = 5;
    source = 'assets/images/vivus_instant_logo.svg';

    constructor() {
    }
}
