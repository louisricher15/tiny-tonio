import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonService } from "../services/common.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  locale: string = '';

  title: any = {
    fr: 'Accueil | Tiny Tonio',
    en: 'Home | Tiny Tonio'
  }

  constructor(private commonService: CommonService, private titleService: Title) {
    this.commonService.setHeaderVisibility(true);
  }

  ngOnInit(): void {
    this.locale = this.commonService.locale;
    this.titleService.setTitle(this.title[this.locale]);
  }

  ngAfterViewInit() {
    this.commonService.localeSubject.subscribe(
      data => {
        this.locale = data;
        this.titleService.setTitle(this.title[data]);
      }
    );
  }
}
