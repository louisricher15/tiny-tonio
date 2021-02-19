import { Component, Input, OnInit } from '@angular/core';
import { faRobot, faSeedling, faAirFreshener, faCookieBite, faPalette } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slogan',
  templateUrl: './slogan.component.html',
  styleUrls: ['./slogan.component.scss']
})
export class SloganComponent implements OnInit {

  faRobot = faRobot;
  faSeedling = faSeedling;
  faAirFreshener = faAirFreshener;
  faCookieBite = faCookieBite;
  faPalette = faPalette;

  @Input() locale: string = '';

  wording: any = {
    slogan: {
      fr: 'Redécorez votre intérieur',
      en: 'Redecorate your in-home'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
