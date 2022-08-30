import { ViewportScroller } from '@angular/common';
import { Service } from './../../services';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

services$!: Observable<any> | undefined;
services: Service[] = [
  {
    name: 'Пресноводные аквариумы в стиле «Псевдоморе»',
    description: 'Наши тарифы на обслуживание:',
    fromPrice:'2000',
    image:'assets/imgs/services/service01.png'
  },
  {
    name: 'Пресноводные аквариумы с растениями',
    description: 'Наши тарифы на обслуживание:',
    fromPrice:'2000',
    image:'assets/imgs/services/service02.png'
  },
  {
    name: 'Морские аквариумы с рыбами',
    description: 'Наши тарифы на обслуживание:',
    fromPrice:'3000',
    image:'assets/imgs/services/service03.png'
  },
  {
    name: 'Морские аквариумы с кораллами',
    description: 'Наши тарифы на обслуживание:',
    fromPrice:'3000',
    image:'assets/imgs/services/service04.png'
  },
];
  constructor(private viewportscroller: ViewportScroller) { }

  ngOnInit(): void {
// this.services$ = this.ServicesService.getServices()
  }

  onClickScroll(elementId: string):void {
    this.viewportscroller.scrollToAnchor(elementId);
  }
}
