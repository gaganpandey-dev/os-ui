import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';

import { Sidebar } from '../../components/sidebar/sidebar';

import { Topbar } from '../../components/topbar/topbar';

@Component({
  selector: 'app-dashboard',
  standalone: true,

  imports: [
    RouterOutlet,
    Sidebar,
    Topbar
  ],

  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
