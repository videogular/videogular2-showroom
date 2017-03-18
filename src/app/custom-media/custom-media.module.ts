import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VgControlsModule } from "videogular2/controls";
import { VgCoreModule } from "videogular2/core";
import { CustomMediaComponent } from './custom-media.component';
import { TimeViewerComponent } from './time-viewer/time-viewer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        VgCoreModule,
        VgControlsModule
    ],
    declarations: [
        CustomMediaComponent,
        TimeViewerComponent
    ]
})
export class CustomMediaModule {
}
