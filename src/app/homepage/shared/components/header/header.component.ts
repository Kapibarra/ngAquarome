import { ViewportScroller } from '@angular/common';
import { Component, DoCheck, HostListener, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  isSticky: boolean = false;
  isFilled: boolean = true;
  mobile: boolean = false;


  constructor(private viewportscroller: ViewportScroller, router: Router) { 
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (event.url === '') {
          this.isFilled = false;
        } else {
          this.isFilled = true;
        }
      }
    });
  }

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
  onScroll(event: any) {
    const verticalOffset = window.pageYOffset;
    verticalOffset > 40 ? (this.isSticky = true) : (this.isSticky = false);
  }
  onClickScroll(elementId: string):void {
    this.viewportscroller.scrollToAnchor(elementId);
  }
}
