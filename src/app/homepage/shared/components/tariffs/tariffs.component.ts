import { Service } from './../../services';
import SwiperCore, { SwiperOptions ,Navigation, Autoplay, Swiper} from 'swiper';
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
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    
  };
  service: Service[] = [{
    id:1,
    name: 'Разовый выезд',
    description: 'Разовый выезд специалиста',
    fromPrice: 'от 2000 рублей',
    image: 'assets/imgs/tariffs/tariffs01.jpeg',
    imageLoaded: true,
    price:2000
  },
  {
    id:2,
    name: 'Обслуживание аквариума',
    description: 'Разовый выезд специалиста',
    fromPrice: 'от 1000 рублей',
    image: 'assets/imgs/tariffs/tariffs02.jpg',
    imageLoaded: true,
    price:500
  },
  {
    id:3,
    name: 'Переезд аквариума',
    description: 'Разовый выезд специалиста',
    fromPrice: 'от 1000 рублей',
    image: 'assets/imgs/tariffs/tariffs03.jpg',
    imageLoaded: true,
    price:500
  },
  {
    id:4,
    name: 'Оформление аквариума',
    description: 'Разовый выезд специалиста',
    fromPrice: 'от 1000 рублей',
    image: 'assets/imgs/tariffs/tariffs04.jpg',
    imageLoaded: true,
    price:500
  },
  {
    id:5,
    name: 'Ремонт аквариума',
    description: 'Разовый выезд специалиста',
    fromPrice: 'от 1000 рублей',
    image: 'assets/imgs/tariffs/tariffs05.jfif',
    imageLoaded: true,
    price:500
  },
  {
    id:6,
    name: 'Сборка аквариума',
    description: 'Разовый выезд специалиста',
    fromPrice: 'от 1000 рублей',
    image: 'assets/imgs/tariffs/tariffs06.jpg',
    imageLoaded: true,
    price:500
  },
]
  constructor() { }

  ngOnInit(): void {
  }
  setSwiperInstance(swiper: Swiper) {
    setInterval(() => {
      swiper.slideNext();
    }, 10000);
  }
}
