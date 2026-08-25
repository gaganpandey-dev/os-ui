import { Component } from '@angular/core';
import { StatCard } from '../../components/stat-card/stat-card';

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
  imports: [StatCard],
  templateUrl: './dashboard-home.html',
  styleUrl: './dashboard-home.css'
})
export class DashboardHome {

}
