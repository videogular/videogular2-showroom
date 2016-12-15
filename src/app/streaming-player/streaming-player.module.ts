import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StreamingPlayerComponent } from "./streaming-player.component";

import { VgCoreModule } from "videogular2/core";
import { VgControlsModule } from "videogular2/controls";
import { VgOverlayPlayModule } from "videogular2/overlay-play";
import { VgBufferingModule } from "videogular2/buffering";
import { VgStreamingModule } from "videogular2/streaming";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule,
        VgStreamingModule
    ],
    declarations: [ StreamingPlayerComponent ]
})
export class StreamingPlayerModule {
}
