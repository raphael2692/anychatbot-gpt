import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: true
})
export class LandingComponent implements OnInit{

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['/app'])
  }
}
