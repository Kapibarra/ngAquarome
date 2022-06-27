import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions ,Navigation, Autoplay} from 'swiper';


// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 3333500,
      disableOnInteraction: false
    },
  };

  constructor() { }

  ngOnInit(): void {

  }

}
