import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { CommonService } from "./services/common.service";
import { Router } from "@angular/router";

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

  showHeader = false;

  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.commonService.headerVisibleSubject.subscribe(data => this.showHeader = data);
    this.commonService.localeSubject.subscribe(data => this.locale = data);
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
}
