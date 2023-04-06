import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NebularChatMessage } from 'src/app/models/nebular-chat-message.model';
import { PromptService } from 'src/app/services/prompt.service';
import { OpenaiService } from 'src/app/services/openai.service';
import { NbSidebarService } from '@nebular/theme';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss',],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ChatComponent implements OnInit {

  currentPrompt: any
  isLoggedUser = false
  loggedUser: any
  openaiKey: any
  botResponse: any
  maxMessagesWindow: any
  isChatEnabled: any
  termsAccepted: Boolean = false
  messages: NebularChatMessage[] = [

  ];
  constructor(
    private authService: AuthService,
    private router: Router,
    private promptService: PromptService,
    private openaiService: OpenaiService,
    private sidebarService: NbSidebarService,
    private localStorageService: LocalStorageService
  ) {
    this.termsAccepted = this.localStorageService.isValid('termsAccepted')
    console.debug(this.termsAccepted)
  }

  ngOnInit(): void {


    this.promptService.currentPrompt$.subscribe((value) => {
      this.currentPrompt = value;
      console.log("Current prompt", this.currentPrompt)
    });


    this.authService.isLoggedUser$.subscribe(
      (res) => this.isLoggedUser = res
    )

    if (this.isLoggedUser) {
      this.authService.loggedUser$.subscribe(
        (res) => {
          this.loggedUser = res
          this.sidebarService.collapse('left')
        }
      )

    }

    else {
      alert("Must login first")
      this.router.navigate(['/'])
    }


    if (this.termsAccepted === true) {

    }

    else {


      alert("Must accept terms first!")
      this.router.navigate(['/app'])
    }
    this.authService.openaiKey$.subscribe(
      res => this.openaiKey = res
    )



  }

  userSendMessage(event: { message: any; }) {
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: true,
      user: {
        name: this.loggedUser.displayName,
        avatar: this.loggedUser.avatarURL,
      },
    });
    this.isChatEnabled = false
    this.getBotReply()
  }


  getBotReply() {
    console.log("click")

    this.openaiService.postChatMessage(this.openaiKey, this.currentPrompt, this.loggedUser, this.messages.slice(this.maxMessagesWindow))
      .subscribe(
        data => {
          console.log("Success", data)
          this.botResponse = data
          this.composeBotReply()
        },
        error => {
          console.log("Success", error)
          this.botResponse = error
          this.composeBotReply()
        }
      )
  }

  composeBotReply() {
    this.messages.push(
      {
        text: `${this.botResponse.choices[0].message.content}`,
        date: new Date(),
        reply: false,
        user: {
          name: this.currentPrompt.title,
          avatar: this.currentPrompt.avatarURL,
        },
      },
    );
    this.isChatEnabled = true
  }

  // fakeBotReply() {
  //   this.messages.push(
  //     {
  //       text: 'bot reply',
  //       date: new Date(),
  //       reply: false,
  //       user: {
  //         name: 'Bot',
  //         avatar: 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/robot-face.png',
  //       },
  //     },
  //   );
  // }


}
