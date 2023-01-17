import { Component } from '@angular/core';
import { UserDataService } from './services/user-data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientReg';
  users:any;
  constructor(private userData: UserDataService){
    this.userData.users().subscribe((data)=>{this.users=data;})
  }


  getUserFormData(data:any){
     this.userData.saveUsers(data).subscribe((result)=>{
      console.warn(result);
      
     })
  }





}
