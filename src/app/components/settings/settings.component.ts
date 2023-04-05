import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbSidebarService, NbThemeService } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { OpenaiService } from 'src/app/services/openai.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


  isLoggedUser = false
  loggedUser: any
  openaiKey: any
  maxTokens: any
  targetModel: any

  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private themeService: NbThemeService,
    private sidebarService: NbSidebarService,
    private openaiService: OpenaiService) {
  }

  ngOnInit(): void {

    this.authService.isLoggedUser$.subscribe(
      (res) => this.isLoggedUser = res
    )
    if (this.isLoggedUser) {
      this.authService.loggedUser$.subscribe(
        (res) => this.loggedUser = res
      )
    }
    else {
      alert("Must login first")
      this.router.navigate(['/'])
    }
    this.authService.openaiKey$.subscribe(
      res => this.openaiKey = res
    )
    this.sidebarService.toggle(false, 'left')

    this.openaiService.maxTokens$.subscribe(
      (res) => this.maxTokens = res
    )

    this.openaiService.targetModel$.subscribe(
      (res) => this.targetModel = res
    )
   
  }

  onUserUpdateApiKey(f: NgForm) {
    this.openaiKey = f.value.openaikey
    this.loggedUser.openaiKey = f.value.openaikey
    this.authService.setOpenaiKey(f.value.openaikey)
    this.localStorageService.addItem("openaiKey", f.value.openaikey)
  }
  onToggle() {
    if (this.themeService.currentTheme === 'default') {
      this.themeService.changeTheme('dark');
    } else {
      this.themeService.changeTheme('default');
    }
  }

onSetTargetModel(targetModel:String) {
  this.openaiService.targetModel$.next(targetModel)
  this.maxTokens = targetModel

}
  onSetMaxTokens(maxTokens:Number) {
    const numMaxTokens = Number(maxTokens)
    this.openaiService.maxTokens$.next(numMaxTokens)
    this.maxTokens = numMaxTokens

  }
}