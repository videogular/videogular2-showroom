import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MasterPlayerComponent } from "./master-player.component";

import { VgCoreModule } from "videogular2/core";
import { VgControlsModule } from "videogular2/controls";
import { VgBufferingModule } from "videogular2/buffering";
import { VgPipComponent } from './vg-pip/vg-pip.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        VgCoreModule,
        VgControlsModule,
        VgBufferingModule
    ],
    declarations: [ MasterPlayerComponent, VgPipComponent ]
})
export class MasterPlayerModule {
}
