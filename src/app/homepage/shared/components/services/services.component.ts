import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

services$!: Observable<any> | undefined;


  constructor(private ServicesService: ServicesService) { }

  ngOnInit(): void {
this.services$ = this.ServicesService.getServices()
  }

  
}
