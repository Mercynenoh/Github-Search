import { Component, OnInit } from '@angular/core';
import { GitprofileService } from '../gitprofile.service';

@Component({  
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  public myRepos: any;
  public repoName: string = "";
  public repository: any = [];
  constructor(private gitprofileService :GitprofileService ) { }
  APIRequest() {
    let promise = new Promise((resolve, reject) => {
      this.gitprofileService.searchRepo().subscribe((data) => {
        if (data) {
          resolve(data as string[]);
        }
        else {
          reject("nothing")
        }
      })
    })
    return promise
  }
  findUser(){
    this.gitprofileService.updateRepo(this.repoName);
    this.myRepos= this.gitprofileService.searchRepo().subscribe((data: any)=>{
      this.myRepos = data ['items'];
      console.log(data);
    });
  }
  ngOnInit(): void {
    this.myRepos= this.gitprofileService.searchRepo().subscribe((data)=>{
      this.myRepos = data as string[];
      console.log(data);
    });
  }

}
