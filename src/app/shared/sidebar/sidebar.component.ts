import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  listItems: any[] = [
    { path: '/home', title: 'Home' },
    { path: '/leaderboard', title: 'Leaderboard' },
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeTo(route: string): void {
    this.router.navigate([route]);
  }

}
