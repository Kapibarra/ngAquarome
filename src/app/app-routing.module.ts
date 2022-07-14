import { MainpageComponent } from './homepage/mainpage/mainpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PricepageComponent } from './homepage/pricepage/pricepage.component';

const routes: Routes = [
  {
    path: '', 
    component: MainpageComponent,
  },
  {
    path: 'price', 
    component: PricepageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
