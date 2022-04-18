import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitprofileService {
  private username:string;
  private repoName: string;

  private clientId = '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'

  constructor(private http:HttpClient) { 
    this.username = 'Mercynenoh'
    this.repoName = 'Akan-naming-culture'
  }
  getUserInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId )
    // use pipe to invoke the map method  so that data collected can be in form of observables
    .pipe(map(data=>{
      return data;
    }));
  }
  getUserRepo(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientId )
    // use pipe to invoke the map method  so that data collected can be in form of observables
    .pipe(map(data=>{
      return data;
    }));
  }
  searchRepo(){
    return this.http.get("https://api.github.com/search/repositories?q=" + this.repoName ) 
    .pipe(map(data=>{
      return data;
    }));
  }
  updateUser(username: string){
    this.username = username;

  }
   updateRepo(repoName: string){
      this.repoName = repoName;
}
}
