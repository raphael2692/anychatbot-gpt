import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';

import { FormsModule } from '@angular/forms';
import { NbThemeModule, NbLayoutModule, NbMenuModule, NbCardModule, NbSidebarModule, NbTabsetModule, NbChatModule, NbButtonModule, NbToggleModule, NbInputModule, NbActionsModule, NbBadgeModule, NbListModule, NbAccordionModule, NbStepperModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ChatComponent } from './components/chat/chat.component';
import { PromptsComponent } from './components/prompts/prompts.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NbIconModule } from '@nebular/theme';
import { PromptCreateComponent } from './components/prompt-create/prompt-create.component';
import { PromptCreateAdvancedComponent } from './components/prompt-create-advanced/prompt-create-advanced.component';
import { PromptCreateRoleplayComponent } from './components/prompt-create-roleplay/prompt-create-roleplay.component';
import { TestComponent } from './components/test/test.component';
import { NebularLayoutComponent } from './components/nebular-layout/nebular-layout.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    // HomeComponent,
    LoginComponent,
    LogoutComponent,
    ChatComponent,
    PromptsComponent,
    SettingsComponent,
    PromptCreateComponent,
    PromptCreateAdvancedComponent,
    PromptCreateRoleplayComponent,
    NebularLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbButtonModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbCardModule,
    NbTabsetModule,
    NbChatModule.forRoot(),
    NbIconModule,
    NbToggleModule,
    NbInputModule,
    NbActionsModule,
    NbBadgeModule,
    NbListModule,
    NbAccordionModule,
    NbStepperModule,
    
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
