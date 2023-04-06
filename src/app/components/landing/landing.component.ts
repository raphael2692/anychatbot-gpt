import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NtkmeButtonModule } from '@ctrl/ngx-github-buttons';
import { MdoButtonModule } from '@ctrl/ngx-github-buttons';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: true,
  imports: [
    NtkmeButtonModule,
    MdoButtonModule
  ]
})
export class LandingComponent implements OnInit{

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigateByUrl('/app')
  }
}
