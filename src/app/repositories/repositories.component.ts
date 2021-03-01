import { Component, OnInit } from '@angular/core';

import {UserserviceService} from '../userservice.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repo : Repos | any;
  constructor( public repoService: UserserviceService ) { }

  repoSearch(searchName: string){
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
    this.repoSearch('mireille1999');
  }
 
}
