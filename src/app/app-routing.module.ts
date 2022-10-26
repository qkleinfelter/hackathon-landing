import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirHockeyComponent } from './pages/air-hockey/air-hockey.component';
import { GameCenterComponent } from './pages/game-center/game-center.component';
import { HomeComponent } from './pages/home/home.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { UserComponent } from './pages/user/user.component';
import { EightBallComponent } from './shared/eight-ball/eight-ball.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'game-center', component: GameCenterComponent },
  { path: 'air-hockey', component: AirHockeyComponent },
  { path: 'eight-ball', component: EightBallComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
