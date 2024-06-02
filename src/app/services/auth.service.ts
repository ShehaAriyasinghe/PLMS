import { Injectable } from '@angular/core';

import firebase from "firebase/compat";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,Auth } from "@angular/fire/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {from, Observable, switchMap} from "rxjs";
import User = firebase.User;


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authState$: Observable<User | null>;


  constructor(private afAuth: AngularFireAuth,private firestore: AngularFirestore) {
    this.authState$ = this.afAuth.authState;

  }


  // register method
  register(email: string, password: string,role:string) {
    return from(
      this.afAuth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
        return this.firestore.collection('users').doc(userCredential.user?.uid).set({
          email,
          role
        });
      })
    );
  }







  //login method

  login(email: string, password: string): Observable<any> {
    return from (this.afAuth.signInWithEmailAndPassword( email, password)).pipe(
      switchMap((userCredential)=>{
        return this.getUserRole(userCredential.user?.uid as string);
      })
    )
  }

  // signout

  logout() {
    return from(this.afAuth.signOut());
  }


  getUserRole(uid: string): Observable<any>{
    return this.firestore.collection('users').doc(uid).valueChanges();
  }
}
