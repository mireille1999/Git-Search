import {Component, OnInit} from '@angular/core';
import {UserserviceService} from '../userservice.service';
import {User} from '../user';
import { Repos } from '../repos';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user : User | any;
  repo : Repos | any;
  constructor(public myService: UserserviceService, private repoService: UserserviceService) {
  }

  searchs(searchName: string) {
    this.myService.searchUSer(searchName).then(
      (success: any)=>{
        this.user = this.myService.foundUser;
      },
      (error: any)=>{
        console.log(error)
      }
    );
      this.repoService.getRepos(searchName).then(
        (results: any)=>{
          this.repo =this.repoService.allRepos
          console.log(this.repo);
        },
        (error: any)=>{
          console.log(error);
        }
      );
  }

  ngOnInit() {
    this.searchs('mireille1999');
  }
}