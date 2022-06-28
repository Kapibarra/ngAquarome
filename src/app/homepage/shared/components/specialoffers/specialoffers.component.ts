import  SwiperCore, { SwiperOptions, Autoplay, Navigation } from 'swiper';
import { Component, OnInit } from '@angular/core';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

@Component({
  selector: 'app-specialoffers',
  templateUrl: './specialoffers.component.html',
  styleUrls: ['./specialoffers.component.scss']
})
export class SpecialoffersComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

}
