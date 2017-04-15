import { Routes } from "@angular/router";
import { SimplePlayerComponent } from "../simple-player/simple-player.component";
import { SinglePlayerComponent } from "../single-player/single-player.component";
import { AudioPlayerComponent } from "../audio-player/audio-player.component";
import { BoundPlayerComponent } from "../bound-player/bound-player.component";
import { CuePointsPlayerComponent } from "../cue-points-player/cue-points-player.component";
import { GoogleImaPlayerComponent } from "../google-ima-player/google-ima-player.component";
import { MasterPlayerComponent } from "../master-player/master-player.component";
import { StreamingPlayerComponent } from "../streaming-player/streaming-player.component";
import { MultiplePlayersComponent } from '../multiple-players/multiple-players.component';
import { CustomMediaComponent } from '../custom-media/custom-media.component';
import { SmartPlaylistComponent } from '../smart-playlist/smart-playlist.component';

export const ROUTES: Routes = [
    { path: '', component: SimplePlayerComponent },

    { path: 'simple-player', component: SimplePlayerComponent },
    { path: 'single-player', component: SinglePlayerComponent },
    { path: 'audio-player', component: AudioPlayerComponent },
    { path: 'bound-player', component: BoundPlayerComponent },
    { path: 'multiple-players', component: MultiplePlayersComponent },
    { path: 'cue-points-player', component: CuePointsPlayerComponent },
    { path: 'google-ima-player', component: GoogleImaPlayerComponent },
    { path: 'master-player', component: MasterPlayerComponent },
    { path: 'streaming-player', component: StreamingPlayerComponent },
    { path: 'custom-media', component: CustomMediaComponent },
    { path: 'smart-playlist', component: SmartPlaylistComponent },

    { path: '**', component: SimplePlayerComponent }
];
