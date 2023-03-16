import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  email: string = '';
  name: string = '';
  status: string = '';
  error: any;
  constructor() {}

  ngOnInit(): void {}
  // onSubmitForm(formData) {
  //   console.log(this.formData);

  // }
  handleSubmit() {
    const formData = new FormData();
    formData.append('email', this.email);
    formData.append('message', this.name);

    fetch('https://formspree.io/f/xqkoloke', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          this.status = 'Thanks for your submission!';
          this.email = '';
          this.name = '';
        } else {
          response.json().then((data) => {
            if (data.errors) {
              this.status = data.errors
                .map((error: Error) => error.message)
                .join(', ');
            } else {
              this.status = 'Oops! There was a problem submitting your form';
            }
          });
        }
      })
      .catch((error) => {
        this.status = 'Oops! There was a problem submitting your form';
      });
  }
}
