import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserConnected: any;
  currentUserConnectedSubject: Subject<any> = new Subject<any>()

  datas = [
    {
      mail: 'client@mail.com',
      password: 'psswd',
      firstname: 'Client',
      lastname: 'CLIENT',
      role: ['CUSTOMER'],
    },
    {
      mail: 'client-createur@mail.com',
      password: 'psswd',
      firstname: 'Client-Createur',
      lastname: 'CLIENT-CREATOR',
      role: ['CUSTOMER', 'CREATOR'],
    },
    {
      mail: 'admin@mail.com',
      password: 'psswd',
      firstname: 'Admin',
      lastname: 'ADMIN',
      role: ['ADMIN'],
    },
    {
      mail: 'dev@mail.com',
      password: 'psswd',
      firstname: 'Dev',
      lastname: 'DEV',
      role: ['DEV'],
    }
  ]

  constructor() { }

  userValidationChecked(credentials: { username: string; password: string; }) {
    return this.datas
      .filter(item => item.mail === credentials.username && item.password === credentials.password).length === 1;
  }

  initAuthSessionForUser(username: string) {
    localStorage.setItem('tt-current-session', JSON.stringify(this.datas
      .filter(item => item.mail === username)[0]));
    this.currentUserConnected = this.datas.filter(item => item.mail === username)[0];
    this.currentUserConnectedSubject.next(this.currentUserConnected);
  }

  getCurrentSession() {
    return localStorage.getItem('tt-current-session');
  }
}
