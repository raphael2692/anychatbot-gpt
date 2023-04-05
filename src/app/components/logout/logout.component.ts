import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbSidebarService } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LogoutComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private sidebarService: NbSidebarService
  ) { }

  ngOnInit(): void {
    this.authService.logout().then(
      () => this.router.navigate(['/app'])
    )
    // .then(
    //   () => this.sidebarService.expand('left')
    // )
  }
}
