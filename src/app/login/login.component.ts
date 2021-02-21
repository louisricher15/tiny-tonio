import { Component, OnInit } from '@angular/core';
import { CommonService } from "../services/common.service";
import { Title } from "@angular/platform-browser";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {AuthService, PutResponse} from "../services/auth.service";

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

  login: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  });

  submitted = false;
  hasWrongCredentialsError = false;

  constructor(
    private commonService: CommonService,
    private titleService: Title,
    private router: Router,
    private authService: AuthService
  ) {
    this.commonService.setHeaderVisibility(false);
  }

  ngOnInit(): void {
    if (localStorage.getItem('tt-current-user')) {
      this.router.navigate(['home']).then();
    } else {
      this.locale = this.commonService.locale;
      this.titleService.setTitle(this.title[this.locale]);
    }
  }

  _login() {
    this.submitted = true;
    if (this.login.valid) {
      this.authService.userValidationChecked(this.login.getRawValue()).subscribe(
        (data: any) => {
          if (data) {
            this.authService.login({ username: this.login.getRawValue().username }).subscribe(
              (response: PutResponse) => {
                if (response && response.n === 1) {
                  this.router.navigate(['home']).then(() => {
                    this.authService.userConnectedSubject.next(data[0]);
                    localStorage.setItem('tt-current-user', JSON.stringify(data[0]));
                  });
                }
              },
              error => console.error(error)
            );
          }
        },
        error => console.error(error)
      );
      this.hasWrongCredentialsError = true;
    }
  }

}
