import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faSearch, faShoppingBag, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { CommonService } from "./services/common.service";
import { Router } from "@angular/router";
import {AuthService, PutResponse} from "./services/auth.service";

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

  constructor(private commonService: CommonService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (localStorage.getItem('tt-current-user')) {
      this.currentSession = JSON.parse(localStorage.getItem('tt-current-user') as string);
    }
  }

  ngAfterViewInit() {
    this.commonService.headerAndFooterVisibleSubject.subscribe(data => this.showHeaderAndFooter = data);
    this.commonService.localeSubject.subscribe(data => this.locale = data);
    this.authService.userConnectedSubject.subscribe(data => this.currentSession = data);
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
    this.authService.logout({ username: this.currentSession.email }).subscribe(
      (response: PutResponse) => {
        if (response && response.n === 1) {
          this.router.navigate(['login']).then(() => {
            this.authService.userConnectedSubject.next(null)
            localStorage.removeItem('tt-current-user');
          });
        }
      },
      error => console.error(error)
    );
  }
}
