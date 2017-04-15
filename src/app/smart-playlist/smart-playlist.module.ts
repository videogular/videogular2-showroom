import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { SmartPlaylistComponent } from './smart-playlist.component';

@NgModule({
    imports: [
        CommonModule,
        VgCoreModule,
        VgControlsModule
    ],
    declarations: [ SmartPlaylistComponent ]
})
export class SmartPlaylistModule {
}
