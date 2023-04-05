import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NbMenuItem, NbThemeService } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['./nav.component.scss'],

})
export class NavComponent implements OnInit {
  constructor(
    private authService: AuthService
  ) { }

  isLoggedUser = false;
  loggedUser: any;
  items: NbMenuItem[] = []

  ngOnInit(): void {
    this.authService.isLoggedUser$.subscribe(
      res => {
        this.isLoggedUser = res
        if (this.isLoggedUser === true) {
          this.items = [

            {
              title: 'Chatbots',
              icon: 'message-square-outline',
              expanded: true,
              children: [
                {
                  title: 'All',
                  link: 'prompts',
                  icon: 'people-outline'
                },
                {
                  title: 'Create custom',
                  link: 'prompt-create',
                  icon: 'person-add-outline',
                  badge: {
                    text: 'beta',
                    status: 'danger',
                  },
                }
              ]
            },
            {
              title: 'Settings',
              icon: 'settings-outline',
              link: 'settings',
            },
            {
              title: 'Logout',
              icon: 'corner-down-left-outline',
              link: 'logout',
            }
          ];
        } else {
          this.items = [
            {
              title: 'Login',
              icon: 'corner-down-right-outline',
              link: 'login', // goes into angular `routerLink`
            }
          ];
        }
      })
    this.authService.loggedUser$.subscribe(
      res =>
        this.loggedUser = res
    )
  }
}


