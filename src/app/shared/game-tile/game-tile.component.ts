import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-tile',
  templateUrl: './game-tile.component.html',
  styleUrls: ['./game-tile.component.scss'],
})
export class GameTileComponent implements OnInit {
  @Input() game!: String;
  game_url: String = '';
  constructor() {}

  ngOnInit(): void {
    this.game_url = `/${this.game}`;
  }
}
