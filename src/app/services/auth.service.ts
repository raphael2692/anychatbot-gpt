import { Injectable } from '@angular/core';
import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private provider = new GoogleAuthProvider();
  loggedUser$ = new BehaviorSubject(<any>User)
  isLoggedUser$ = new BehaviorSubject(<any>Boolean)
  openaiKey$ = new BehaviorSubject(<any>{})

  currentLoggedUser = this.loggedUser$.asObservable()
  currentIsLoggedUser = this.isLoggedUser$.asObservable()
  currentOpenaiKey = this.openaiKey$.asObservable()

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    this.refreshLoggedUser()
    this.refreshOpenaiKey()
  }

  refreshLoggedUser() {
    if (this.localStorageService.isValid("user")) {
      const user = this.localStorageService.getItem("user")
      this.loggedUser$.next(user)
      this.isLoggedUser$.next(true)
    }
    else {
      this.isLoggedUser$.next(false)
    }
  }

  refreshOpenaiKey() {
    if (this.localStorageService.isValid("openaiKey")) {
      const openaiKey = this.localStorageService.getItem("openaiKey")
      this.openaiKey$.next(openaiKey)
    }
    else {
      this.openaiKey$.next(null)
    }
  }
  setOpenaiKey(key: any) {
    this.openaiKey$.next(key);
  }

  async loginWithGooglePopUp() {
    const auth = getAuth();
    signInWithPopup(auth, this.provider)
      .then((result) => {

        const credential = GoogleAuthProvider.credentialFromResult(result);

        if (credential) {
          const token = credential.accessToken;
          console.log(token)

        }
        const user = result.user;
        console.log(user)
          const customUser:User = {
             email : user.email,
             displayName: user.displayName,
             avatarURL: user.photoURL
           }
           this.loggedUser$.next(customUser)
           this.isLoggedUser$.next(true)
           this.localStorageService.addItem("user", customUser)

        // if (user.email === 'raffaele2692@gmail.com') { // TODO
        //   const customUser:User = {
        //     email : user.email,
        //     displayName: user.displayName,
        //     avatarURL: user.photoURL
        //   }
        //   this.loggedUser$.next(customUser)
        //   this.isLoggedUser$.next(true)
        //   this.localStorageService.addItem("user", customUser)
        // }
        // else {
        //   alert('You shall not pass.')
        //   this.router.navigate(['/'])

        // }


      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  async logout() {
    this.isLoggedUser$.next(false)
    this.loggedUser$.next(null)
    this.localStorageService.deleteAllItems()
  }

}
