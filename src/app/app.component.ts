import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faSearch, faShoppingBag, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { CommonService } from "./services/common.service";
import { Router } from "@angular/router";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'tiny-tonio';
  locale = 'fr';

  faSearch = faSearch;
  faShoppingBag = faShoppingBag;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faSignOutAlt = faSignOutAlt;

  showHeaderAndFooter = false;
  currentSession: any = null;

  constructor(private commonService: CommonService, private router: Router, private auth: AuthService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.commonService.headerAndFooterVisibleSubject.subscribe(data => this.showHeaderAndFooter = data);
    this.commonService.localeSubject.subscribe(data => this.locale = data);
    this.auth.currentUserConnectedSubject.subscribe(data => this.currentSession = data);
    // this.currentSession = this.auth.getCurrentSession();
  }

  handleSearch(event: KeyboardEvent, search: HTMLInputElement) {
    event.key === 'Enter' && this.search(search);
  }

  search(search: HTMLInputElement){
    if (search.value.length > 0) {
      // TODO: save value to service and then fire action of navigation
      this.router.navigate(['search-results']).then(() => search.value = '');
    }
  }

  setLocale(locale: string) {
    this.commonService.setLocale(locale);
  }

  getConnectedUserName() {
    return `${this.currentSession.firstname} ${this.currentSession.lastname}`;
  }

  logout() {
    this.router.navigate(['login']).then(() => localStorage.removeItem('tt-current-session'));
  }
}
