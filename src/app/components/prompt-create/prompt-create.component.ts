import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NbSidebarService } from '@nebular/theme';
import { NgbNavbar } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { PromptService } from 'src/app/services/prompt.service';

@Component({
  selector: 'app-prompt-create',
  templateUrl: './prompt-create.component.html',
  styleUrls: ['./prompt-create.component.scss']
})
export class PromptCreateComponent implements OnInit {

  newPrompt: any
  apiKey: any
  isLoggedUser: any;
  loggedUser: any;
  injectedHeaderPreview:any
  isAdvancedMode:any 


  constructor(private promptService: PromptService, 
    private router: Router, 
    private authService: AuthService,
    private sidebarService: NbSidebarService) { }

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

    this.sidebarService.toggle(false, 'left')
    this.isAdvancedMode = false

  }

  onPreview(f: NgForm) {
    const strNewPromptFacts = JSON.stringify(f.value.newPromptFacts)
    const strNewPromptRules = JSON.stringify(f.value.newPromptRules)
    const injectedHeader = this.buildInjectedHeaderEng(f.value.newPromptTitle, strNewPromptFacts, strNewPromptRules)
    this.injectedHeaderPreview = injectedHeader

  }
  onNewPrompt(f: NgForm) {

    let injectedHeader: any

    if (this.isAdvancedMode === true) {
      injectedHeader = this.injectedHeaderPreview
    }
    else {

      const strNewPromptFacts = JSON.stringify(f.value.newPromptFacts)
      const strNewPromptRules = JSON.stringify(f.value.newPromptRules)
      injectedHeader = this.buildInjectedHeaderEng(f.value.newPromptTitle, strNewPromptFacts, strNewPromptRules)

    }

    const newPrompt = {
      "id": 9999,
      "title": f.value.newPromptTitle,
      "description": "",
      "avatarURL": f.value.newPromptAvatarURL,
      "header": injectedHeader,
      "tags": [],
      "category": "",
      "subCategory": ""
    }
    this.promptService.setPrompt(newPrompt)
    this.authService.openaiKey$.subscribe(
      (res) => {
        this.apiKey = res
        if (this.apiKey) {
          this.router.navigate(['/app/chat'])
        }
        else {
          alert('Must set API key first!')
          this.router.navigate(['/app/settings'])
        }
      }
    )
  }

  buildInjectedHeaderEng(promptTitle: any, strNewPromptFacts: any, strNewPromptRules:any) {
    const injectedHeader =
      `
From now on you are: ${promptTitle}. As  ${promptTitle} the are the most relevant facts concerning you: ${strNewPromptFacts}.
During our conversation you must follow these rules: ${strNewPromptRules}`.toString()
    return injectedHeader
  }


  onToggleAdvanceMode() {
    this.isAdvancedMode = !this.isAdvancedMode
  }
}