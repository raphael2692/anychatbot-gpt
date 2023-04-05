// https://github.com/angular/angularfire/blob/master/docs/firestore.md#cloud-firestore
import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, DocumentReference } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonFirestoreService {
  //item$!: Observable<any[]>;
  // userDataCollection: any
  // promptDataCollection: any
  // userData$?: Observable<any[]>;
  // promptData$?: Observable<any[]>;
  // firestore: Firestore = inject(Firestore);
  // userExist = true

  // constructor() {
  //   this.userDataCollection = collection(this.firestore, 'userData');
  //   console.log('******')
  //   console.log(this.userDataCollection)
  //   this.promptDataCollection = collection(this.firestore, 'promptData');
  //   this.userData$ = collectionData(this.userDataCollection) as Observable<any[]>;
  //   this.promptData$ = collectionData(this.promptDataCollection) as Observable<any[]>;

  // }


  // doUserExistByEmail(email: string) {
  //   let userExistBool: any
  //   this.userData$?.subscribe(
  //     (res) => {
  //       userExistBool = res.some((el: { email: string; }) => el.email === email);
  //       this.userExist = userExistBool
  //     }
  //   )
  // }

  // testObs(email: string) {
  //   let userExist: any
  //   const o = new Observable(observer => {
  //     this.userData$?.subscribe(
  //       (res) => {
  //         userExist = res.some((el: { email: string; }) => el.email === email);
  //         this.userExist = userExist
  //       }
  //     )
  //   }
  //   )
  //   return o
  // }

  // addUserProfile(email: string) {
  //   if (!email) return;
  //   this.testObs(email).subscribe(
  //     () => {
  //       if (!this.userExist) {
  //         addDoc(this.userDataCollection, <any>{ email }).then((documentReference: DocumentReference) => {
  //           // the documentReference provides access to the newly created document
  //           console.log(documentReference)
  //         });
  //       }
  //     }
  //   )


  // }


  // addPrompt(id: string) {
  //   if (!id) return;

  //   addDoc(this.promptDataCollection, <any>{ id }).then((documentReference: DocumentReference) => {
  //     // the documentReference provides access to the newly created document
  //     console.log(documentReference)
  //   });
  // }

}
