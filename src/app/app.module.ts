import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { UserComponent } from './pages/user/user.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LeaderboardCardComponent } from './pages/leaderboard/leaderboard-card/leaderboard-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeaderboardComponent,
    UserComponent,
    SidebarComponent,
    LeaderboardCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
