import { Service } from './../../services';
import SwiperCore, { SwiperOptions ,Navigation, Autoplay} from 'swiper';
import { Component, OnInit } from '@angular/core';
// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);
@Component({
  selector: 'app-tariffs',
  templateUrl: './tariffs.component.html',
  styleUrls: ['./tariffs.component.scss']
})
export class TariffsComponent implements OnInit {
  config: SwiperOptions = {
    spaceBetween: 30,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    
  };
  service: Service[] = [{
    id:1,
    name: 'Обслуживание',
    description: 'Разовый выезд специалиста',
    fromPrice: 'от 1000 рублей',
    image: 'assets/imgs/services/service01.png',
    imageLoaded: true,
    price:500
  },
  {
    id:2,
    name: 'Обслуживание',
    description: 'Разовый выезд специалиста',
    fromPrice: 'от 1000 рублей',
    image: 'assets/imgs/services/service01.png',
    imageLoaded: true,
    price:500
  },
  {
    id:3,
    name: 'Обслуживание',
    description: 'Разовый выезд специалиста',
    fromPrice: 'от 1000 рублей',
    image: 'assets/imgs/services/service01.png',
    imageLoaded: true,
    price:500
  },
  {
    id:4,
    name: 'Обслуживание',
    description: 'Разовый выезд специалиста',
    fromPrice: 'от 1000 рублей',
    image: 'assets/imgs/services/service01.png',
    imageLoaded: true,
    price:500
  },
  {
    id:1,
    name: 'Обслуживание',
    description: 'Разовый выезд специалиста',
    fromPrice: 'от 1000 рублей',
    image: 'assets/imgs/services/service01.png',
    imageLoaded: true,
    price:500
  },
  {
    id:1,
    name: 'Обслуживание',
    description: 'Разовый выезд специалиста',
    fromPrice: 'от 1000 рублей',
    image: 'assets/imgs/services/service01.png',
    imageLoaded: true,
    price:500
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
