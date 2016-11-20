import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SimplePlayerComponent } from "./simple-player.component";
import { VgCore } from 'videogular2/core';

@NgModule({
    imports: [
        CommonModule,
        VgCore
    ],
    declarations: [ SimplePlayerComponent ]
})
export class SimplePlayerModule {
}
