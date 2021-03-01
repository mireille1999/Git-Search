import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repos } from './repos';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  foundUser: User | any;
  allRepos: Repos | any;
 

  constructor(private http: HttpClient) {
    this.foundUser = new User("","","","",0,0,0,"",new Date);
    this.allRepos = new Repos("","","",new Date,0,0,"");
  }

  searchUSer(searchName: string) {
   
    interface Responce {
      url:string,
      login: string;
      html_url:string;
      location:string
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
    }

    return new Promise<void>((resolve, reject) => {
      this.http.get<Responce>('https://api.github.com/users/'+searchName+'?access_token='+environment.apiKey).toPromise().then(
        (result: any) => {
          this.foundUser = result;
          console.log(this.foundUser);
          resolve();
        },
        (error: any) => {
          console.log(error);
          reject();
        }
      );
    });
  }
  getRepos(searchName: string){
    interface Repos{
      name:string;
      html_url:string;
      description:string;
      forks:number;
      watchers_count:number;
      language:string;
      created_at:Date;
    }
    return new Promise<void>((resolve,reject)=>{
      this.http.get<Repos>('https://api.github.com/users/'+searchName+"/repos?order=created&sort=asc?access_token="+environment.apiKey).toPromise().then(
        (results: any) => {
          this.allRepos = results;
          resolve();
        },
        (error: any) => {
          console.log(error);
          reject();
        }
      );
    });
  }
}

