import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  static readonly API = "https://jsonplaceholder.typicode.com/users"

  //inject HttpClient service to consume rest end points!
  constructor(private http:HttpClient) { }

  getAllEmployee(){
    //http://dummy.restapiexample.com/api/v1/employees
    return this.http.get(RestapiService.API)
  }




}
