import { Injectable, inject, signal } from '@angular/core';

import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  user,
} from '@angular/fire/auth';
import { Firestore, docData } from '@angular/fire/firestore';
import firebase from 'firebase/compat/app';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  firestore = inject(Firestore);

  getUser(uid: string): Observable<any> {
    const docRef = doc(this.firestore, `users/${uid}`);
    const promise = docData(docRef);
    return from(promise);
  }

  updateUserData(user: firebase.UserInfo | null): Observable<void> {
    if (!user) {
      throw new Error('User is null');
    }
    const docRef = doc(this.firestore, `users/${user.uid}`);
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || 'New User',
      settings: {
        fontType: 'serif',
        fontSize: 'medium',
        highContrast: false,
        darkMode: false,
      },
      progress: {},
    };
    const promise = setDoc(docRef, userData);
    return from(promise);
  }
}
