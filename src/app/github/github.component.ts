import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { User } from '../user';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  

  constructor(private http:HttpClient) { }

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
