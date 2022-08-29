
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
import { ReviewsComponent } from './homepage/shared/components/reviews/reviews.component';
import { AboutComponent } from './homepage/shared/components/about/about.component';
import { ContactspageComponent } from './homepage/contactspage/contactspage.component';
import { ContactsComponent } from './homepage/shared/components/contacts/contacts.component';
import { FooterComponent } from './homepage/shared/components/footer/footer.component';
import { FormComponent } from './homepage/shared/components/form/form.component';
import { DatepickerComponent } from './homepage/shared/components/datepicker/datepicker.component';
import { TariffsComponent } from './homepage/shared/components/tariffs/tariffs.component';
import { GalleryComponent } from './homepage/shared/components/gallery/gallery.component';

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
    SpecialofferformComponent,
    ReviewsComponent,
    AboutComponent,
    ContactspageComponent,
    ContactsComponent,
    FooterComponent,
    DatepickerComponent,
    FormComponent,
    TariffsComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
