import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './homepage/shared/components/header/header.component';
import { HeroComponent } from './homepage/shared/components/hero/hero.component';
import { MainpageComponent } from './homepage/mainpage/mainpage.component';
import { ButtonMainComponent } from './homepage/shared/components/button-main/button-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestDialogComponentComponent } from './homepage/shared/components/request-dialog-component/request-dialog-component.component';
import { ButtonSecondaryComponent } from './homepage/shared/components/button-secondary/button-secondary.component';
import { ReasonsComponent } from './homepage/shared/components/reasons/reasons.component';
import { SpecialoffersComponent } from './homepage/shared/components/specialoffers/specialoffers.component';
import { ServicesComponent } from './homepage/shared/components/services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { PricepageComponent } from './homepage/pricepage/pricepage.component';
import { SpecialofferformComponent } from './homepage/shared/components/specialofferform/specialofferform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    MainpageComponent,
    ButtonMainComponent,
    RequestDialogComponentComponent,
    ButtonSecondaryComponent,
    ReasonsComponent,
    SpecialoffersComponent,
    ServicesComponent,
    PricepageComponent,
    SpecialofferformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
