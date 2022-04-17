import { Component, OnInit } from '@angular/core';
import { GitprofileService } from '../gitprofile.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  public myUser:any=[];
  public repos:any=[];
  public username: string = "";

  constructor(private gitprofileService:GitprofileService) {

   }
   findUser(){
    this.gitprofileService.updateUser(this.username);
    this.gitprofileService.getUserInfo().subscribe((response: any) =>{
      this.myUser = response;
      console.log(response);
    });
    this.gitprofileService.getUserRepo().subscribe((myRepo: any) =>{
      this.repos = myRepo;
      console.log(myRepo);
    });
  }

  ngOnInit(): void {
  //   interface ApiResponse{
  //     name:string;
      
  //   }
  //   this.http.get<ApiResponse>("https://github.com/Mercynenoh").subscribe(data=>{
  //     // Succesful API request
  //     this.user = new User(data.name)
  //   })
  }

}
