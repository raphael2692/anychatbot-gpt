import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbSidebarComponent, NbSidebarService } from '@nebular/theme';
import { AuthService } from 'src/app/services/auth.service';
import { PromptService } from 'src/app/services/prompt.service';

@Component({
  selector: 'app-prompts',
  templateUrl: './prompts.component.html',
  styleUrls: ['./prompts.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class PromptsComponent implements OnInit {
  prompts: any[] = [];
  currentPrompt: any
  isSelected: Boolean = false
  pageSize = 10;
  pageToLoadNext = 1;
  loading = false;
  apiKey: any;

  constructor(
    private promptService: PromptService, 
    private router:Router,
    private authService:AuthService,
    private sidebarService: NbSidebarService) {}

  ngOnInit(): void {
    this.getPrompts();
    this.promptService.currentPrompt$.subscribe(
      res => this.currentPrompt = res
    )
    this.sidebarService.toggle(false, 'left')
  }

  getPrompts() {
    this.promptService.getPrompts().subscribe(prompts => {
      this.prompts = prompts;
      this.loading = false;
    });
  }

  loadNext() {
    if (this.loading) { return }
    this.loading = true;
    // this.placeholders = new Array(this.pageSize);
    this.getPrompts()
  }
  
  onSetCurrentPrompt(index:any) {
    this.currentPrompt = this.prompts[index]
    this.promptService.setPrompt(this.currentPrompt);
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
}
