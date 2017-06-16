import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgControlsModule } from 'videogular2/controls';
import { VgCoreModule } from 'videogular2/core';
import { CustomMediaComponent } from './custom-media.component';
import { FormsModule } from '@angular/forms';
import { SvgViewerComponent } from './svg-viewer/svg-viewer.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        VgCoreModule,
        VgControlsModule
    ],
    declarations: [
        CustomMediaComponent,
        SvgViewerComponent
    ]
})
export class CustomMediaModule {
}
