import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
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
import { MultiplePlayersModule } from './multiple-players/multiple-players.module';
import { CustomMediaModule } from './custom-media/custom-media.module';
import { SmartPlaylistModule } from './smart-playlist/smart-playlist.module';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES, { useHash: true }),
        Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ]),

        SimplePlayerModule,
        SinglePlayerModule,
        AudioPlayerModule,
        BoundPlayerModule,
        MultiplePlayersModule,
        CuePointsPlayerModule,
        GoogleImaPlayerModule,
        MasterPlayerModule,
        StreamingPlayerModule,
        CustomMediaModule,
        SmartPlaylistModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
