import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbSidebarService } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LoginComponent implements OnInit  {

  constructor(private router: Router, 
    private authService: AuthService,
    private sidebarService: NbSidebarService) { }

  ngOnInit(): void {
    this.authService.loginWithGooglePopUp()
    .then(
      ()  => {
        this.router.navigate(['/app'])
      }
    )
    // .then
    // ( 
    //   () => this.sidebarService.expand('left')
    // )
  }

}
