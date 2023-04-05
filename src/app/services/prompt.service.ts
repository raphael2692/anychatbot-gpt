import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class PromptService {


  private promptsUrl = 'assets/prompts.json';
  private prompt$ = new BehaviorSubject<any>({});
  currentPrompt$ = this.prompt$.asObservable();

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {

    if (this.localStorageService.isValid("prompt")) {
      const prompt = this.localStorageService.getItem("prompt")
      this.prompt$.next(prompt)
    }

  }

  setPrompt(prompt: any) {
    this.prompt$.next(prompt)
    this.localStorageService.addItem("prompt", prompt)
  }
  getPromptByTitle(title: string): Observable<any> {
    return this.http.get(`${this.promptsUrl}?title=${title}`);
  }

  getPrompts(): Observable<any> {
    return this.http.get(this.promptsUrl);
  }

}
