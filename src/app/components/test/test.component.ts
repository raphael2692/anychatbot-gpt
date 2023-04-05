import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  standalone: true
})
export class TestComponent implements OnInit{


  constructor(private router:Router) {
    
  }
  ngOnInit(): void {
      
  }

  onClick() {
    this.router.navigate(['/app/about'])
  }
}
