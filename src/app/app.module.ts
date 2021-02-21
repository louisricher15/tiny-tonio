import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './login/login.component';
import { SloganComponent } from './home/slogan/slogan.component';
import { ProductsComponent } from './home/products/products.component';
import { CreatorsComponent } from './home/creators/creators.component';
import { SubmitProductsComponent } from './submit-products/submit-products.component';
import { RegisterComponent } from './register/register.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { CookiesComponent } from './cookies/cookies.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { ComingSoonMessageComponent } from './coming-soon-message/coming-soon-message.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SloganComponent,
    ProductsComponent,
    CreatorsComponent,
    SubmitProductsComponent,
    RegisterComponent,
    SearchResultsComponent,
    ShoppingCardComponent,
    ProfileComponent,
    AboutComponent,
    CookiesComponent,
    TermsOfServiceComponent,
    ComingSoonMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
