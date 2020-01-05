import { Component, OnInit } from '@angular/core';
import { Absence } from './Absence-module';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-list-absence',
  templateUrl: './list-absence.component.html',
  styleUrls: ['./list-absence.component.css']
})
export class ListAbsenceComponent implements OnInit {
  absence ;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAbsence().subscribe((data) =>{
      this.absence= data;
    });
  }

}
