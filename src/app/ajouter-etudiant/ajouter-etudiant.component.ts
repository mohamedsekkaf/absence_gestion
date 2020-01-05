import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ajouter-etudiant',
  templateUrl: './ajouter-etudiant.component.html',
  styleUrls: ['./ajouter-etudiant.component.css']
})
export class AjouterEtudiantComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  public onSubmit(f){
    this.http.post("http://localhost:8090/api/students",f).toPromise().then(res=>{
      console.log(res);
    })
    
  }
}
