import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./routes/routes";
import { SimplePlayerModule } from "./simple-player/simple-player.module";
import { SinglePlayerModule } from "./single-player/single-player.module";
import { AudioPlayerModule } from "./audio-player/audio-player.module";
import { BoundPlayerModule } from "./bound-player/bound-player.module";
import { CuePointsPlayerModule } from "./cue-points-player/cue-points-player.module";
import { GoogleImaPlayerModule } from "./google-ima-player/google-ima-player.module";
import { MasterPlayerModule } from "./master-player/master-player.module";
import { StreamingPlayerModule } from "./streaming-player/streaming-player.module";
import { VrPlayerModule } from "./vr-player/vr-player.module";
import { MultiplePlayersModule } from './multiple-players/multiple-players.module';
import { CustomMediaModule } from './custom-media/custom-media.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, { useHash: true }),

        SimplePlayerModule,
        SinglePlayerModule,
        AudioPlayerModule,
        BoundPlayerModule,
        MultiplePlayersModule,
        CuePointsPlayerModule,
        GoogleImaPlayerModule,
        MasterPlayerModule,
        StreamingPlayerModule,
        VrPlayerModule,
        CustomMediaModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
