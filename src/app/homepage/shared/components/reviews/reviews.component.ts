import { Component, OnInit } from '@angular/core';
interface Reviews {
  photo: string;
  id? : number,
  name: string;
  client: string;
}
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
Review: Reviews[] = [{
  photo: 'string',
  id : 1,
  name: 'Петр Сергеевич',
  client: "Клиент",
},
{
  photo: 'string',
  id : 1,
  name: 'Петр Сергеевич',
  client: "Клиент",
},
{
  photo: 'string',
  id : 1,
  name: 'Петр Сергеевич',
  client: "Клиент",
},
{
  photo: 'string',
  id : 1,
  name: 'Петр Сергеевич',
  client: "Клиент",
},
]

  constructor() { 


  }

  ngOnInit(): void {
  }

}
