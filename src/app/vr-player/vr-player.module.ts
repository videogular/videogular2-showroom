import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VrPlayerComponent } from "./vr-player.component";
import { VgControlsModule } from "videogular2/controls";
import { VgCore } from "videogular2/core";

@NgModule({
    imports: [
        CommonModule,
        VgCore,
        VgControlsModule
    ],
    declarations: [ VrPlayerComponent ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VrPlayerModule {
}
