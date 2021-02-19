import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  headerVisible = true;
  headerVisibleSubject: Subject<boolean> = new Subject<boolean>();

  locale = 'fr';
  localeSubject: Subject<string> = new Subject<string>();

  constructor() { }

  setHeaderVisibility(visible: boolean) {
    this.headerVisible = visible;
    this.headerVisibleSubject.next(this.headerVisible);
  }

  setLocale(locale: string) {
    this.locale = locale;
    this.localeSubject.next(this.locale);
  }

}
