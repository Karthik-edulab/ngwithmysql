import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
   url= "http://localhost:5000"
  constructor(private http:HttpClient) { }
  
   users(){
    return this.http.get(this.url)
   }
}
