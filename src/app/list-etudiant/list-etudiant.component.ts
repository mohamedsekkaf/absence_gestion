import { Component, OnInit } from '@angular/core';
import { Etudiant } from './List-etudiant';
import { ApiService } from '../api.service';
  
@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent implements OnInit {
  etudiant ;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getStudents().subscribe((data) =>{
      this.etudiant= data;
    });
  }


  ///{date:new Date(),fname:fname,lname,cne,cin,className}
  check(l){
    f:Date;
    const t = {fname:l.fname,lname:l.lname,cne:l.cne,cin:l.cin,class_name:l.class_name,date: new Date()}
    console.log(t);
    this.apiService.setAbs(t);
  }

}