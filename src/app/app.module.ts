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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    MainpageComponent,
    ButtonMainComponent,
    RequestDialogComponentComponent,
    ButtonSecondaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
