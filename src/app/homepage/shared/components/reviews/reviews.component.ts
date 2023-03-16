import { Component, OnInit } from '@angular/core';
interface Reviews {
  photo: string;
  id?: number;
  name: string;
  client: string;
}
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  Review: Reviews[] = [
    {
      photo: 'assets/imgs/reviews/person.png',
      id: 1,
      name: 'Светлана',
      client: 'Чистка аквариумов',
    },
    {
      photo: 'assets/imgs/reviews/person.png',
      id: 2,
      name: 'Алексей',
      client: 'Чистка аквариумов',
    },
    {
      photo: 'assets/imgs/reviews/person.png',
      id: 3,
      name: 'Яна',
      client: 'Переезд аквариумов',
    },
    {
      photo: 'assets/imgs/reviews/person.png',
      id: 4,
      name: 'Петр',
      client: 'Чистка аквариумов',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
