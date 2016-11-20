import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MasterPlayerComponent } from "./master-player.component";

import { VgCore } from "videogular2/core";
import { VgControlsModule } from "videogular2/controls";
import { VgBufferingModule } from "videogular2/buffering";

@NgModule({
    imports: [
        CommonModule,
        VgCore,
        VgControlsModule,
        VgBufferingModule
    ],
    declarations: [ MasterPlayerComponent ]
})
export class MasterPlayerModule {
}
