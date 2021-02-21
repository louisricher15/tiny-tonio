import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  headerAndFooterVisible = true;
  headerAndFooterVisibleSubject: Subject<boolean> = new Subject<boolean>();

  locale = 'fr';
  localeSubject: Subject<string> = new Subject<string>();

  constructor() { }

  setHeaderVisibility(visible: boolean) {
    this.headerAndFooterVisible = visible;
    this.headerAndFooterVisibleSubject.next(this.headerAndFooterVisible);
  }

  setLocale(locale: string) {
    this.locale = locale;
    this.localeSubject.next(this.locale);
  }

}
