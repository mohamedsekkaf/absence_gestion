import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = "SIMOsimo";
  constructor(private httpClient: HttpClient) { }
  public getStudents(){
    return this.httpClient.get('http://localhost:8090/api/students/all')
  }

  public getAbsence(){
    return this.httpClient.get('http://localhost:8090/api/seance/all')
  }
  public setStudents(l){
    return this.httpClient.post('http://localhost:8090/api/students/all',l).toPromise().then(res=>{
      console.log(res);
      
    })
   
}
public setAbs(t){
  return this.httpClient.post('http://localhost:8090/api/seance',t).toPromise().then(res=>{
    console.log(res);
    
  })
}

}
