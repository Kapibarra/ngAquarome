import { Service } from './../../services';
import SwiperCore, {
  SwiperOptions,
  Navigation,
  Autoplay,
  Swiper,
} from 'swiper';
import { Component, OnInit } from '@angular/core';
// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);
@Component({
  selector: 'app-tariffs',
  templateUrl: './tariffs.component.html',
  styleUrls: ['./tariffs.component.scss'],
})
export class TariffsComponent implements OnInit {
  config: SwiperOptions = {
    spaceBetween: 30,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3.1,
        spaceBetween: 40,
      },
    },
  };
  service: Service[] = [
    {
      id: 1,
      name: 'Разовый выезд',
      description: 'Разовый выезд специалиста по Вашему адресу',
      fromPrice: 'от 2000 рублей',
      image: 'assets/imgs/tariffs/tariffs01.jpeg',
      imageLoaded: true,
      price: 2000,
    },
    {
      id: 2,
      name: 'Обслуживание аквариума',
      description: 'Регулярное обслуживание аквариумов от двух раз в месяц',
      fromPrice: 'от 2000 рублей',
      image: 'assets/imgs/tariffs/tariffs02.jpg',
      imageLoaded: true,
      price: 2000,
    },
    {
      id: 3,
      name: 'Переезд аквариума',
      description:
        'Перевезем Ваш аквариум и всех его обитателей на новое место',
      fromPrice: 'от 2400 рублей',
      image: 'assets/imgs/tariffs/tariffs03.jpg',
      imageLoaded: true,
      price: 2400,
    },
    {
      id: 4,
      name: 'Оформление аквариума',
      description:
        'Профессиональное декорирование аквариумов. Подбор растений и декора.',
      fromPrice: 'от 10000 рублей',
      image: 'assets/imgs/tariffs/tariffs04.jpg',
      imageLoaded: true,
      price: 10000,
    },
    {
      id: 5,
      name: 'Ремонт аквариума',
      description: 'Устраняем протечки. Ремонтируем аквариумное оборудование.',
      fromPrice: 'от 1000 рублей',
      image: 'assets/imgs/tariffs/tariffs05.jfif',
      imageLoaded: true,
      price: 1000,
    },
    {
      id: 6,
      name: 'Сборка аквариума',
      description: 'Сборка аквариумов под заказ по Вашим параметрам',
      fromPrice: 'от 3000 рублей',
      image: 'assets/imgs/tariffs/tariffs06.jpg',
      imageLoaded: true,
      price: 3000,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  setSwiperInstance(swiper: Swiper) {
    setInterval(() => {
      swiper.slideNext();
    }, 10000);
  }
}
