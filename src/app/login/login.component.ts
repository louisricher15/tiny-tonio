import { Component, OnInit } from '@angular/core';
import { CommonService } from "../services/common.service";
import { Title } from "@angular/platform-browser";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from "@angular/router";
import {AuthService} from "../services/auth.service";

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

  login: FormGroup = new FormGroup({});
  submitted = false;

  constructor(
    private commonService: CommonService,
    private titleService: Title,
    private router: Router,
    private auth: AuthService
  ) {
    this.commonService.setHeaderVisibility(false);
  }

  ngOnInit(): void {
    this.locale = this.commonService.locale;
    this.titleService.setTitle(this.title[this.locale]);
    this.login = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  _login() {
    this.submitted = true;
    if (this.login.valid) {
      if (this.auth.userValidationChecked(this.login.getRawValue())) {
        this.router.navigate(['home'])
          .then(() => this.auth.initAuthSessionForUser(this.login.getRawValue().username));
      } else {
        this.login.setErrors({ wrongCredentials: true });
      }
    } else {
      this.login.setErrors({ wrongInformations: true });
    }
  }

}
