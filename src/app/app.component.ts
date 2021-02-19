import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { CommonService } from "./services/common.service";

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

  wording: any = {
    header: {
      menu: {
        products: {
          fr: 'Proposez vos produits',
          en: 'Submit your products'
        },
        login: {
          fr: 'Se connecter',
          en: 'Log in'
        },
        register: {
          fr: 'S\'inscrire',
          en: 'Sign in'
        }
      }
    },
    footer: {
      shop: {
        title: {
          fr: 'Boutique',
          en: 'Shop'
        },
        figurines: 'Figurines',
        gadgets: 'Gadgets',
        goodies: 'Goodies',
        art: {
          fr: 'Arts Muraux',
          en: 'Wall Arts'
        },
        plants: {
          fr: 'Plantes',
          en: 'Plants'
        },
        login: {
          fr: 'Se connecter',
          en: 'Log in'
        },
        register: {
          fr: 'S\'inscrire',
          en: 'Sign in'
        }
      },
      tt: {
        title: 'Tiny Tonio',
        about: {
          fr: 'A propos',
          en: 'About'
        }
      },
      networks: {
        title: {
          fr: 'Réseaux sociaux',
          en: 'Social Networks'
        },
        instagram: 'Instagram',
        facebook: 'Facebook',
        twitter: 'Twitter'
      },
      usage: {
        cgu: {
          fr: 'Conditions Générales d\'Utilisation',
          en: 'Terms of Service'
        },
        cookies: 'Cookies'
      },
      footer: '© 2021 Tiny Tonio'
    }
  }

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.commonService.headerVisibleSubject.subscribe(
      data => this.showHeader = data
    );
    this.commonService.localeSubject.subscribe(
      data => this.locale = data
    );
  }

  handleSearch(event: KeyboardEvent, search: HTMLInputElement) {
    if (event.key === 'Enter') {
      this.search(search);
    }
  }

  search(search: HTMLInputElement){
    if (search.value.length > 0) {
      console.log('ok', search.value)
      search.value = '';
    }
  }

  setLocale(locale: string) {
    this.commonService.setLocale(locale);
  }
}
