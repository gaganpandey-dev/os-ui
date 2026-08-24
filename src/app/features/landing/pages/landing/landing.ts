import { Component } from '@angular/core';

import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    Navbar,
    Hero,

  ],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing {}
