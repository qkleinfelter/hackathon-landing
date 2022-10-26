import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { UserComponent } from './pages/user/user.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AirHockeyComponent } from './pages/air-hockey/air-hockey.component';
import { LeaderboardCardComponent } from './pages/leaderboard/leaderboard-card/leaderboard-card.component';
import { GameCenterComponent } from './pages/game-center/game-center.component';
import { GameTileComponent } from './shared/game-tile/game-tile.component';
import { EightBallComponent } from './shared/eight-ball/eight-ball.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeaderboardComponent,
    UserComponent,
    SidebarComponent,
    AirHockeyComponent,
    GameCenterComponent,
    GameTileComponent,
    EightBallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
