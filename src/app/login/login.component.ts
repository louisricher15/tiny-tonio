import { Component, OnInit } from '@angular/core';
import { CommonService } from "../services/common.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  locale: string = '';

  title: any = {
    fr: 'Connexion | Tiny Tonio',
    en: 'Login | Tiny Tonio'
  }

  constructor(private commonService: CommonService, private titleService: Title) {
    this.commonService.setHeaderVisibility(false);
  }

  ngOnInit(): void {
    this.locale = this.commonService.locale;
    this.titleService.setTitle(this.title[this.locale]);
  }

}
