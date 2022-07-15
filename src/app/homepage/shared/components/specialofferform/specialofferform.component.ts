import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Mail } from './specialofferform';

@Component({
  selector: 'app-specialofferform',
  templateUrl: './specialofferform.component.html',
  styleUrls: ['./specialofferform.component.scss']
})
export class SpecialofferformComponent implements OnInit {
  mail!: Mail;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  onSubmit(formValue: any) {

    var formData = new FormData();
    for (var key in formValue) {
      formData.append(key, formValue[key]);
    }
    this.http
      .post('/assets/handler.php', formData)
      .subscribe((responce: any) => {
      });

    const popUp = document.getElementById('popUp');
    setTimeout(() => {
      popUp?.classList.add('popUpVisible')
    }, 1000);
    setTimeout(() => {
      document.getElementById('popUp')?.classList.remove('popUpVisible')
    }, 4000);
  }

}
