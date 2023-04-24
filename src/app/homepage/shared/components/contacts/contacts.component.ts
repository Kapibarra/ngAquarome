import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  phone: string = '';
  name: string = '';
  status: string = '';
  error: any;

  constructor() {}

  ngOnInit(): void {}

  handleSubmit() {
    const formData = new FormData();
    formData.append('phone', this.phone);
    formData.append('name', this.name);

    fetch('https://formspree.io/f/xqkoloke', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          this.status = 'Ваша заявка успешно отправлена!';
          this.phone = '';
          this.name = '';
        } else {
          response.json().then((data) => {
            if (data.errors) {
              this.status = data.errors
                .map((error: Error) => error.message)
                .join(', ');
            } else {
              this.status = 'Упс... Что то пошло не так';
            }
          });
        }
      })
      .catch((error) => {
        this.status = 'Ошибка';
      });
  }
}
