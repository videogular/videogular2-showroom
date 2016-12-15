import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GoogleImaPlayerComponent } from "./google-ima-player.component";
import { VgCoreModule } from "videogular2/core";
import { VgControlsModule } from "videogular2/controls";
import { VgOverlayPlayModule } from "videogular2/overlay-play";
import { VgImaAdsModule } from "videogular2/ima-ads";

@NgModule({
    imports: [
        CommonModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgImaAdsModule
    ],
    declarations: [ GoogleImaPlayerComponent ]
})
export class GoogleImaPlayerModule {
}
