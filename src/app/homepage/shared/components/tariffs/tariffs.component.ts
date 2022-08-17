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
  constructor() { }

  ngOnInit(): void {
  }

}
