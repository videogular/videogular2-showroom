import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CuePointsPlayerComponent } from "./cue-points-player.component";
import { VgCoreModule } from "videogular2/core";
import { VgOverlayPlayModule } from "videogular2/overlay-play";
import { VgControlsModule } from "videogular2/controls";

@NgModule({
    imports: [
        CommonModule,
        VgCoreModule,
        VgOverlayPlayModule,
        VgControlsModule
    ],
    declarations: [ CuePointsPlayerComponent ]
})
export class CuePointsPlayerModule {
}
