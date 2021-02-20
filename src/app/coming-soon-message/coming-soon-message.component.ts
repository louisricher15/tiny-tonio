import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonService } from "../services/common.service";
import { Title } from "@angular/platform-browser";
import { faCogs } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-comming-soon-message',
  templateUrl: './coming-soon-message.component.html',
  styleUrls: ['./coming-soon-message.component.scss']
})
export class ComingSoonMessageComponent implements OnInit, AfterViewInit {

  locale: string = '';

  faCogs = faCogs;

  title: any = {
    fr: 'Proposez vos produits | Tiny Tonio',
    en: 'Submit your products | Tiny Tonio'
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
