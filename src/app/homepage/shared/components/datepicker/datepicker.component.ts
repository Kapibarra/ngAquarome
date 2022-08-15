import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [DatePipe]
})
export class DatepickerComponent implements OnInit {
  currentDate = new Date();
constructor(private datePipe: DatePipe){
}
  ngOnInit(): void { 
  }
  
}
