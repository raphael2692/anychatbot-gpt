import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PromptCreateComponent } from './components/prompt-create/prompt-create.component';
import { PromptsComponent } from './components/prompts/prompts.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PromptCreateAdvancedComponent } from './components/prompt-create-advanced/prompt-create-advanced.component';
import { PromptCreateRoleplayComponent } from './components/prompt-create-roleplay/prompt-create-roleplay.component';
import { TestComponent } from './components/test/test.component';
import { NebularLayoutComponent } from './components/nebular-layout/nebular-layout.component';
import { LandingComponent } from './components/landing/landing.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'home', component: HomeComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'logout', component: LogoutComponent },
//   { path: 'chat', component: ChatComponent },
//   { path: 'settings', component: SettingsComponent },
//   { path: 'prompts', component: PromptsComponent },
//   { path: 'prompt-create', component: PromptCreateComponent },
//   { path: 'prompt-create-advanced', component: PromptCreateAdvancedComponent },
//   { path: 'prompt-create-roleplay', component: PromptCreateRoleplayComponent },
//   { path: 'test', component: TestComponent },
// ];

const routes: Routes = [
  {
    path: 'app',
    component: NebularLayoutComponent,
    children: [
  //  { path: 'about', component: HomeComponent },
  
   { path: 'login', component: LoginComponent },
   { path: 'logout', component: LogoutComponent },
   { path: 'chat', component: ChatComponent },
   { path: 'settings', component: SettingsComponent },
   { path: 'prompts', component: PromptsComponent },
   { path: 'prompt-create', component: PromptCreateComponent },
   { path: 'prompt-create-advanced', component: PromptCreateAdvancedComponent },
   { path: 'prompt-create-roleplay', component: PromptCreateRoleplayComponent },
    ]
  },
  { path: '', component: LandingComponent },
  // { path: 'test', component: TestComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
