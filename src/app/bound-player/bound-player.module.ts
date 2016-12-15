import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BoundPlayerComponent } from "./bound-player.component";
import { FormsModule } from "@angular/forms";
import { VgCoreModule } from "videogular2/core";
import { VgControlsModule } from "videogular2/controls";
import { VgOverlayPlayModule } from "videogular2/overlay-play";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule
    ],
    declarations: [ BoundPlayerComponent ]
})
export class BoundPlayerModule {
}
