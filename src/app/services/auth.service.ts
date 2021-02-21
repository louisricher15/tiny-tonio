import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import {Observable, Subject} from "rxjs";

export interface PutResponse { n: number, nModified: number, ok: number }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userConnectedSubject: Subject<any> = new Subject<any>();

  constructor(private http: HttpClient) { }

  userValidationChecked(payload: { username: string; password: string; }) {
    return this.http.post(`${environment.baseUrlApi.users}/check-credentials`, payload);
  }

  login(payload: { username: string; }): Observable<PutResponse> {
    return this.http.put<PutResponse>(`${environment.baseUrlApi.users}/login`, payload);
  }

  logout(payload: { username: string; }): Observable<PutResponse> {
    return this.http.put<PutResponse>(`${environment.baseUrlApi.users}/logout`, payload);
  }
}
