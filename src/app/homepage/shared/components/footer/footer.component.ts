import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  mobile: boolean = false;
  constructor(private viewportscroller: ViewportScroller) { }

  ngOnInit(): void {
    if (window.screen.width <= 968) {
      // 768px portrait
      this.mobile = true;
    }
  }
  ngDoCheck() {
    if (window.screen.width <= 968) {
//resizeable
      this.mobile = true;
    }
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events

  onClickScroll(elementId: string):void {
    this.viewportscroller.scrollToAnchor(elementId);
  }

}
