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
    image:''
  },
  {
    name: 'Пресноводные аквариумы с растениями',
    description: 'Наши тарифы на обслуживание:',
    fromPrice:'2000',
    image:''
  },
  {
    name: 'Морские аквариумы с рыбами',
    description: 'Наши тарифы на обслуживание:',
    fromPrice:'3000',
    image:''
  },
  {
    name: 'Морские аквариумы с кораллами',
    description: 'Наши тарифы на обслуживание:',
    fromPrice:'3000',
    image:''
  },
];
  constructor() { }

  ngOnInit(): void {
// this.services$ = this.ServicesService.getServices()
  }

  
}
