import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpCommonService } from './http-common.service';
import { NebularChatMessage } from '../models/nebular-chat-message.model';
import { User } from '../models/user.model';
import { Prompt } from '../models/prompt.model';


@Injectable({
  providedIn: 'root'
})
export class OpenaiService {
  
  private baseUrl = "https://api.openai.com"
  private prompt$ = new BehaviorSubject<any>({});
  selectedPrompt$ = this.prompt$.asObservable();
  targetModel$ = new BehaviorSubject<String>("gpt-3.5-turbo");
  maxTokens$ = new BehaviorSubject<Number>(200);

  constructor(
    private httpService: HttpCommonService,
  ) { }



  postChatMessage(openaiKey: String, prompt: Prompt, loggedUser: User, chatThread: NebularChatMessage[]) {

    const content = this.buildPrompt(prompt, loggedUser, chatThread)

    const url = `${this.baseUrl}/v1/chat/completions`;
    const body = {
      "model": this.targetModel$.value,
      "max_tokens": this.maxTokens$.value,
      "messages": [{ "role": "user", "content": `${content}` }]
    }
    console.debug(body)
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${openaiKey}` });
    return this.httpService.post(url, body, headers)

  }

  buildPrompt(prompt: Prompt, loggedUser: User, chatThread: NebularChatMessage[]) {
    var string = ""
    for (var i = 0; i < chatThread.length; i++) {
      string += `${chatThread[i].user.name}` + ": " + `${chatThread[i].text}` + "\n"
    }
    return `[CHAT SETTINGS]  
User can write \'help\' anytime to recieve info about the bot and how to interact with it.
${prompt.header}
[CHAT HISTORY]
${string}
[YOUR ANSWER]
${prompt.title}: 
`.toString()
  }
}

// ${loggedUser.displayName}: ${chatThread.slice(-1)}\n