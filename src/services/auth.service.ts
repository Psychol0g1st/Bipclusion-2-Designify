import { Injectable, inject, signal } from '@angular/core';

import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  user,
} from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { UserInterface } from 'src/interfaces/user.interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);
  userService = inject(UserService);
  user$ = user(this.firebaseAuth);

  currentUserSig = signal<UserInterface | null | undefined>(undefined);
  signup(email: string, password: string, username: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((response) => {
      updateProfile(response.user, { displayName: username });
      this.userService.updateUserData(response.user).subscribe((user) => {
        console.log('data: ', user);
      });
    });
    return from(promise);
  }
  signin(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => {});
    return from(promise);
  }

  signout(): Observable<void> {
    return from(this.firebaseAuth.signOut());
  }
}
