import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VrPlayerComponent } from "./vr-player.component";
import { VgControlsModule } from "videogular2/controls";
import { VgCoreModule } from "videogular2/core";

@NgModule({
    imports: [
        CommonModule,
        VgCoreModule,
        VgControlsModule
    ],
    declarations: [ VrPlayerComponent ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VrPlayerModule {
}
