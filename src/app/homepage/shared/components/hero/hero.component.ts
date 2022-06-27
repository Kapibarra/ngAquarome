import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions ,Navigation} from 'swiper';


// install Swiper modules
SwiperCore.use([Navigation]);
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
  };

  constructor() { }

  ngOnInit(): void {

  }

}
