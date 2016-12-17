import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiplePlayersComponent } from './multiple-players.component';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

@NgModule({
    imports: [
        CommonModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule
    ],
    declarations: [ MultiplePlayersComponent ]
})
export class MultiplePlayersModule {
}
