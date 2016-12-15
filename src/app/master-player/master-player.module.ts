import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MasterPlayerComponent } from "./master-player.component";

import { VgCoreModule } from "videogular2/core";
import { VgControlsModule } from "videogular2/controls";
import { VgBufferingModule } from "videogular2/buffering";

@NgModule({
    imports: [
        CommonModule,
        VgCoreModule,
        VgControlsModule,
        VgBufferingModule
    ],
    declarations: [ MasterPlayerComponent ]
})
export class MasterPlayerModule {
}
