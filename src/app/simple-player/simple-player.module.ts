import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SimplePlayerComponent } from "./simple-player.component";
import { VgCoreModule } from 'videogular2/core';

@NgModule({
    imports: [
        CommonModule,
        VgCoreModule
    ],
    declarations: [ SimplePlayerComponent ]
})
export class SimplePlayerModule {
}
