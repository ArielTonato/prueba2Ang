import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User
} from '@angular/fire/auth';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth = inject(Auth);

  constructor() { }

  async register(user: IUser) {
    try {
      const { email, password } = user;
      const result = await createUserWithEmailAndPassword(this.auth, email, password);
      console.log(result);
      return result;
    } catch (error) {
      throw (error);
    }
  }

  async login(user: IUser) {
    try {
      const { email, password } = user;
      const result = await signInWithEmailAndPassword(this.auth, email, password);
      console.log(result);
      return result;
    } catch (error) {
      throw (error);
    }
  }

  logOut() {
    return signOut(this.auth);
  }

  getCurrentUser(): Observable<User | null> {
    return new Observable(subscriber => {
      const unsubscribe = this.auth.onAuthStateChanged(user => {
        subscriber.next(user);
      });
      return unsubscribe;
    });
  }
}
